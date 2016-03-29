/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
//import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import * as BS  from "react-bootstrap";
import Select from "react-select";
import Spinner from "react-loader";
import Input from "../controls/bootstrap/Input";
import { Money, moneyText } from '../components/Money';
import { TransfersTable } from '../components/TransfersTable';

import { Link, IndexLink} from "react-router";


import IndexPanel from "./../components/partials/IndexPanel";
import * as Modals from './modals';
import * as A from '../actions/entities';
import read from '../utils/readProp';



const resetModals = {
  showAccountModal: false
};

export class Account extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { ...resetModals };
  }

  loadAccountInfo() {
    const {
      id: customerId
    } = this.props.auth.user.attributes;
    this.props.dispatch(A.fetchOwnAccounts(customerId));

    const { dispatch, params } = this.props;
    const { accountId } = params;
    dispatch(A.fetchAccount(accountId));
    dispatch(A.getTransfers(accountId));
  }

  componentWillMount() {
    this.loadAccountInfo();
  }

  createAccountModal() {
    this.setState({
      showAccountModal: true
    });
  }

  createAccountModalConfirmed() {
    debugger;
  }


  close() {
    this.setState({
      ...resetModals
    });
  }

  handleInput(key, value) {
    this.props.dispatch(A.makeTransferFormUpdate(key, value));
  }
  initiateTransfer(){
    const { dispatch, params, transfer } = this.props;
    const { accountId } = params;
    dispatch(A.makeTransfer(accountId, transfer.form ))
      .then(() => {
        setTimeout(() => {
          this.loadAccountInfo();
        }, 500);
      });
  }


  render () {

    const { showAccountModal } = this.state;
    const { params } = this.props;
    const { loading, errors } = this.props.ui;
    const { entities, accounts } = this.props.data;
    const { accountId } = params;

    const  account = entities[accountId];

    if (loading) {
      return (<h2><Spinner ref="spinner" loaded={false} /> Loading..</h2>);
    }

    if (!account) {
      if (errors.length) {
        return (<h2>Error loading specified account</h2>);
      } else {
        return (<h2><Spinner ref="spinner" loaded={false} /> Loading..</h2>);
      }
    }

    const transferTo = [].concat(accounts.own.reduce((memo, item, idx) => {
      const { balance, title, accountId: itemAccountId } = item;

      if (itemAccountId != accountId) {
        memo.push({
          value: itemAccountId ,
          label: `${title}: ${ moneyText(balance) }`
        });
      }
      return memo;
    }, []),
      accounts.other.reduce((memo, item, idx) => {
      if (!((item.id == accountId) || (item.accountId == accountId))) {
        memo.push({
          value: item.accountId || item.id,
          label: `${item.title}${ item.description ? ': ' + item.description.substr(0, 10): '' }`
        });
      }
      return memo;
    }, []));

    const { title: titleRaw, description: descriptionRaw, balance } = account;

    const title = titleRaw || '[No title]';
    const description = descriptionRaw || '[No description]';

    const transferDisabled = this.props.transfer.loading;

    return (
      <div>
        <PageHeader>
          Account
          <Nav pullRight={true}>
            <ButtonGroup>
              <Button bsStyle={"link"} onClick={this.createAccountModal.bind(this)}>Edit</Button>
            </ButtonGroup>
          </Nav>
        </PageHeader>

        <Row>
          <IndexPanel header="Account Info:">

            <Row>
              <Col xs={4}>Title:</Col>
              <Col xs={8}><strong>{ title }</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Balance:</Col>
              <Col xs={8}><strong><Money amount={balance} /></strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Description:</Col>
              <Col xs={8}><strong>{ description }</strong></Col>
            </Row>

          </IndexPanel>

        </Row>
        <Row>
          <Col xs={12}>
            <h3>You can transfer money to accounts:</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <label>Transfer To:</label>
            <Select
              value={read(this.props.transfer, 'form.account', '')}
              clearable={true}
              options={transferTo}
              disabled={transferDisabled}
              onChange={this.handleInput.bind(this, 'account')}
            />
          </Col>
          <Col sm={3}>
            <Input type="text"
                   className=""
                   label="Amount:"
                   placeholder="Amount"
                   name="amount"
                   addonBefore={
                 (<BS.Glyphicon glyph="usd" />)
                 }
                   addonAfter=".00"
                   disabled={transferDisabled}
                   value={read(this.props.transfer, 'form.amount', '')}
                   errors={read(this.props.transfer, 'errors.amount', []) || []}
                   onChange={this.handleInput.bind(this, 'amount')}
            />
            </Col>
          <Col sm={3}>
            <Input type="textarea"
                   className=""
                   label="Description:"
                   placeholder="Description"
                   name="description"
                   disabled={transferDisabled}
                   value={read(this.props.transfer, 'form.description', '') || ''}
                   errors={read(this.props.transfer, 'errors.description', []) || []}
                   onChange={this.handleInput.bind(this, 'description')}
            />
          </Col>
          <Col sm={2}>
            <br/>
            <Button bsStyle="primary"
                    onClick={this.initiateTransfer.bind(this)}>Transfer</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h3>Account History:</h3>
          </Col>
        </Row>
        <TransfersTable { ...this.props.transfers } />

        <Modals.NewAccountModal show={showAccountModal}
                                action={this.createAccountModalConfirmed.bind(this)}
                                account={{ loading: true }}
                                onHide={this.close.bind(this)}
                                key={0} />


      </div>

    );
  }
}

export default connect(({
  app
  }) => ({
  auth: app.auth,
  data: app.data,
  transfers: app.data.transfers,
  ui: app.ui.account,
  transfer: app.ui.transfersMake
}))(Account);