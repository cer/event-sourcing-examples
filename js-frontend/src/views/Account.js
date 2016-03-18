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
import { Link, IndexLink} from "react-router";


import IndexPanel from "./../components/partials/IndexPanel";
import * as Modals from './modals';
import * as A from '../actions/entities';

const resetModals = {
  showAccountModal: false
};

export class Account extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { ...resetModals };
  }

  componentWillMount() {
    const {
      id: customerId
      } = this.props.auth.user.attributes;
    this.props.dispatch(A.fetchOwnAccounts(customerId));

    const { dispatch, params } = this.props;
    const { accountId } = params;
    dispatch(A.fetchAccount(accountId));
  }

  createAccountModal() {
    this.setState({
      showAccountModal: true
    });
  }

  createAccountModalConfirmed() {
    debugger;
  }

  accountChanged(){

  }

  close() {
    this.setState({
      ...resetModals
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
          label: `${title}: $${ Number(balance).toFixed(2) }`
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

    const { title = '[No title]', description: descriptionRaw, balance: balanceRaw } = account;

    const balance = ((balanceRaw > 0 && balanceRaw < 1) ? '$0' : '$') + Number(balanceRaw).toFixed(2);

    const description = descriptionRaw || '[No description provided]';

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
              <Col xs={8}><strong>{ balance }</strong></Col>
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
          <Col xs={4}>
            <label>Transfer To:</label>
            <Select
              value={''}
              clearable={false}
              options={transferTo}
              onChange={this.accountChanged.bind(this)} />
          </Col>
          <Col xs={3}>
            <label>Amount:</label>
            <BS.Input type="text" />
            </Col>
          <Col xs={3}>
            <label>Description:</label>
            <BS.Input type="textarea" />
          </Col>
          <Col xs={2}>
            <br/>
            <Button bsStyle="primary">Transfer</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h3>Account History:</h3>
          </Col>
        </Row>
        <Table>
          <thead>
          <tr>
            <th>Date</th>
            <th>What</th>
            <th>Counter Account</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a href="#">Account Title #1</a></td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td><a href="#">Account Title #2</a></td>
            <td>$100.00</td>
          </tr>
          </tbody>
        </Table>

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
  ui: app.ui.account
}))(Account);