/**
 * Created by andrew on 17/02/16.
 */
import React from "react";
import { PageHeader, Col, Row, Nav, ButtonGroup, Button, Table } from "react-bootstrap";
import * as BS from "react-bootstrap";
import { connect } from "react-redux";
import AccountInfo from '../components/AccountInfo';
import * as M from './modals';
import IndexPanel from "./../components/partials/IndexPanel";
import * as A from '../actions/entities';
import * as AU from '../actions/authenticate';
import read from '../utils/readProp';
import { Money } from '../components/Money';

const resetModals = {
  showAccountModal: false,
  show3rdPartyAccountModal: false,
  showDeleteAccountModal: false
};

class MyAccounts extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = { ...resetModals };
  }

  componentWillMount() {
    const {
      id: customerId
      } = this.props.auth.user.attributes;
    this.props.dispatch(A.fetchOwnAccounts(customerId));
  }

  createAccountModal() {
    this.setState({
      showAccountModal: true
    });
  }

  createAccountModalConfirmed(payload) {

    const {
      id: customerId
      } = this.props.auth.user.attributes;

    this.props.dispatch(A.accountCreate(customerId, payload))
      .then((accountId) => {
        this.close();
        // return new Promise((rs, rj) => {
          setTimeout(() => {
            this.props.dispatch(A.fetchOwnAccounts(customerId)); //.then(rs, rj);
          }, 1500);
        // });
      })
      .catch(err => {
        // debugger;
        this.props.dispatch(A.accountCreateError(err));
      });
  }

  create3rdPartyAccountModal() {
    this.setState({
      show3rdPartyAccountModal: true
    });
  }

  create3rdPartyAccountModalConfirmed(payload) {
    const {
      id: customerId
    } = this.props.auth.user.attributes;

    const {
      dispatch
    } = this.props;

    dispatch(A.accountRefCreate(customerId, payload))
      .then(() => {
        this.close();
        return new Promise((rs, rj) => {
          setTimeout(() => {
            Promise.all([
              dispatch(AU.authenticate(true)),
              dispatch(A.fetchOwnAccounts(customerId))
            ]).then(rs, rj);
          }, 1500);
        })
      })
      .catch(err => {
        // debugger;
        this.props.dispatch(A.accountRefCreateError(err));
      });
  }

  remove3rdPartyAccountModal(accountId, evt) {
    const account = this.props.app.entities[accountId];
    this.setState({
      accountToRemove: account,
      showDeleteAccountModal: true
    });
  }

  remove3rdPartyAccountModalConfirmed(account) {
    const accountId = account.id || account.accountId;
    const isRef = typeof account.balance == 'undefined';

    const { customerId, dispatch } = this.props;
    dispatch(A.deleteAccount(customerId, accountId, isRef))
    .then(() => {
        this.close();
        setTimeout(() => {
          return Promise.all([
            dispatch(AU.authenticate(true)),
            dispatch(A.fetchOwnAccounts(customerId))
          ]);
        }, 1500);
    },
    err => {
      dispatch(A.errorMessageTimedOut(err && err.message || err));
      this.close();
    });
  }

  close() {
    this.setState({
      ...resetModals
    });
  }

  render () {

    //const deployTooltip = (<Tooltip>
    //  Create a new instance of this demo on your own Heroku server.
    //</Tooltip>);
    const user = this.props.auth.user.attributes;
    const {
      id: customerId,
      email = '',
      ssn = '',
      name = {},
      phoneNumber = '',
      address = {},
      toAccounts
      } = user;

    const firstName = name.firstName || '';
    const lastName = name.lastName || '';

    const {
      city,
      state,
      street1,
      street2,
      zipCode
      } = address;

    const {
      showAccountModal,
      show3rdPartyAccountModal,
      showDeleteAccountModal } = this.state;

    const { accountToRemove = null} = this.state;

    const { error } = this.props;
    const errorLine = error ? (<BS.Panel bsStyle="danger"><strong>{ JSON.stringify(error.errors || error) }</strong></BS.Panel>) : [];

    const ownAccountsData = this.props.app.accounts.own || [];

    //accountId: "000001537c2cf075-a250093f26850000"
    //balance: 0
    //description: null
    //title: "Sample"

    const ownAccounts = ownAccountsData.map(({
      accountId, balance, description = '', title
      }, idx) => (
      <tr key={`own_${idx}`}>
        <td key={0}><AccountInfo accountId={accountId} />{
          (description) ? [
            (<br />),
            <span>{ description }</span>
          ]: null
        }</td>
        <td key={1}><Money amount={balance} /></td>
        <td key={2}><BS.Button bsStyle={"link"} onClick={this.remove3rdPartyAccountModal.bind(this, accountId)}><BS.Glyphicon glyph="remove" /></BS.Button></td>
      </tr>
    ));

    const refAccountsData = this.props.app.accounts.other || [];
    const refAccounts = refAccountsData.map(({
      title,
      description = '',
      id
      }, idx) => (
      <tr key={`ref_${idx}`}>
        <td key={0}><AccountInfo accountId={id} />{
          (description) ? [
            (<br />),
            <span>{ description }</span>
          ]: null
        }
        </td>
        <td key={1} />
        <td key={2}><Button pullRight={true} bsStyle={"link"} onClick={this.remove3rdPartyAccountModal.bind(this, id)}><BS.Glyphicon glyph="remove" /></Button>
        </td>
      </tr>
    ));

    const accounts = (!!(ownAccounts.length + refAccounts.length)) ? [].concat(ownAccounts, refAccounts) : (<tr>
      <td colSpan={3}>No account exists: <Button bsStyle={"link"} onClick={this.createAccountModal.bind(this)}>create a new one</Button> or <Button bsStyle={"link"} onClick={this.create3rdPartyAccountModal.bind(this)}>add a recipient</Button></td>
    </tr>);

    return (
      <div>
        <PageHeader>
            My Accounts
          <Nav pullRight={true}>
            <ButtonGroup>
              <Button bsStyle={"link"} onClick={this.createAccountModal.bind(this)}>Create Account</Button>
              <Button bsStyle={"link"} onClick={this.create3rdPartyAccountModal.bind(this)}>Add 3rd Party Recipients</Button>
            </ButtonGroup>
          </Nav>
        </PageHeader>

        { errorLine }

        <Row>
          <IndexPanel header="Personal Info:">

            <Row>
              <Col xs={4}>Customer:</Col>
              <Col xs={8}><strong>{ `${firstName} ${lastName}` }</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Email:</Col>
              <Col xs={8}><strong>{ email }</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Phone:</Col>
              <Col xs={8}><strong>{ phoneNumber }</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>SSN:</Col>
              <Col xs={8}><strong>{ ssn }</strong></Col>
            </Row>


          </IndexPanel>

        </Row>

        <Table>
          <thead>
          <tr>
            <th>Account Title</th>
            <th>Balance</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          { accounts }
          </tbody>
        </Table>


        <M.NewAccountModal show={showAccountModal}
                                action={this.createAccountModalConfirmed.bind(this)}
                                account={ this.props.app.accounts.create }
                                onHide={this.close.bind(this)}
                                key={0} />

        <M.Add3rdPartyAccountModal show={show3rdPartyAccountModal}
                                        action={this.create3rdPartyAccountModalConfirmed.bind(this)}
                                        onHide={this.close.bind(this)}
                                        key={1} />

        <M.RemoveAccountBookmarkModal show={showDeleteAccountModal}
                                           account={accountToRemove}
                                           action={this.remove3rdPartyAccountModalConfirmed.bind(this)}
                                           onHide={this.close.bind(this)}
                                           key={2} />

      </div>
    );
  }
}

export default connect(({ app }) => {
  return ({
    auth: app.auth,
    app: app.data,
    customerId: read(app, 'auth.user.isSignedIn', false) ? read(app, 'auth.user.attributes.id', null): null,
    error: app.ui.error
  })
})(MyAccounts);