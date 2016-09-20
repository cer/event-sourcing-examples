/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { connect } from "react-redux";

import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import * as BS  from "react-bootstrap";
// import Spinner from "react-loader";
import Select from "react-select";
import Input from "../controls/bootstrap/Input";
import { Money, moneyText } from '../components/Money';
import { TransfersTable } from '../components/TransfersTable';

import { Link, IndexLink } from "react-router";

import IndexPanel from "./../components/partials/IndexPanel";
import * as Modals from './modals';
import * as A from '../actions/entities';
import read from '../utils/readProp';
import { blocked } from '../utils/blockedExecution';

const resetModals = {
  showAccountModal: false,
  unsaved: false
};

export class Account extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { ...resetModals };

    const ensureTransfers = this.ensureTransfers.bind(this);
    const ensureAccounts = this.ensureAccounts.bind(this);

    this.ensureTransfers = blocked(ensureTransfers, true);
    this.ensureAccounts = blocked(ensureAccounts, true);
  }

  ensureTransfers(props, cb) {
    const forceFetch = !cb;
    if (forceFetch) {
      cb = props;
      props = this.props;
    }

    const { dispatch, params, transfers } = props;

    if (!forceFetch && !params) {
      return cb();
    }

    const { accountId } = params;
    if (!forceFetch && (!accountId || transfers[accountId])) {
      return cb();
    }

    dispatch(A.getTransfers(accountId)).then(cb, cb);
  }

  ensureAccounts(props, cb) {
    const forceFetch = !cb;
    if (forceFetch) {
      cb = props;
      props = this.props;
    }

    const { dispatch, params, data } = props;

    if (!forceFetch && (!params || !data || !data.accounts)) {
      return cb();
    }

    const { accountId } = params;

    if (!forceFetch && data.accounts.own && data.accounts.own.length && data.entities[accountId]) {
      return cb();
    }

    if (!forceFetch && (!props.auth || !props.auth.user || !props.auth.user.attributes)) {
      return cb();
    }

    const {
      id: customerId
    } = props.auth.user.attributes;

    Promise.all([
      dispatch(A.fetchOwnAccounts(customerId)),
      dispatch(A.fetchAccount(accountId)),
    ]).then(cb, cb);
  }

  // shouldComponentUpdate(nextProps) {
  //   return (nextProps.params.accountId !== this.props.params.accountId) || (nextProps.app !== this.props.app);
  // }

  componentWillMount() {
    this.ensureAccounts(this.props);
    this.ensureTransfers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.ensureAccounts(nextProps);
    this.ensureTransfers(nextProps);
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
      .then(() => new Promise((rs) => {
          setTimeout(() => {
            this.ensureAccounts();
            this.ensureTransfers();
            rs();
          }, 1500);
        })
      );
  }

  render () {

    const { showAccountModal } = this.state;
    const { params } = this.props;
    const { loading, errors } = this.props.ui;
    const { entities, accounts } = this.props.data;
    const { accountId } = params;

    const  account = entities[accountId];

    const spinnerResult = (<h2 key="0">Loading..</h2>);

    if (loading) {
      return spinnerResult;
    }

    if (!account) {
      if (errors.length) {
        return (<div>
          <h2>Error loading specified account</h2>
          <div>Return <Link to="/">Home</Link> to pick another</div>
        </div>);
      } else {
        return spinnerResult;
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

    const title = titleRaw || '—';
    const description = descriptionRaw || '—';

    const transferDisabled = this.props.transfer.loading;

    return (
      <div key={accountId}>
        <PageHeader>
          Account
          <Nav pullRight={true}>
            <ButtonGroup>
              <Button bsStyle="link" onClick={ null } disabled={true}>Edit</Button>
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
                    disabled={transferDisabled}
                    onClick={!transferDisabled && this.initiateTransfer.bind(this)}>Transfer</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h3>Transfer History:</h3>
          </Col>
        </Row>

        <TransfersTable forAccount={accountId} transfers={ this.props.transfers[accountId] } />

        <Modals.NewAccountModal show={showAccountModal}
                                action={ null }
                                account={{ loading: true }}
                                onHide={this.close.bind(this)}
                                key={0} />


      </div>

    );
  }
}

export default connect(({
  app,
  router
  }) => ({
    app,
  auth: app.auth,
  data: app.data,
  transfers: app.data.transfers,
  ui: app.ui.account,
  transfer: app.ui.transfersMake,
  router
}))(Account);