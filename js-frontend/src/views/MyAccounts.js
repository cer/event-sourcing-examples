/**
 * Created by andrew on 17/02/16.
 */
import React from "react";
import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
//import * as DefaultTheme from "redux-auth";
import Select from "react-select";
import * as Modals from './modals';
import IndexPanel from "./../components/partials/IndexPanel";

import * as A from '../actions/entities';


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

  createAccountModal() {
    this.setState({
      showAccountModal: true
    });
  }

  createAccountModalConfirmed(evt, payload) {

    const {
      id: customerId
      } = this.props.auth.user.attributes;

    this.props.dispatch(A.accountCreate(customerId, payload))
      .then(this.close.bind(this));


  }

  create3rdPartyAccountModal() {

    this.setState({
      show3rdPartyAccountModal: true
    });
  }

  create3rdPartyAccountModalConfirmed() {

  }

  remove3rdPartyAccountModal(evt, evtKey) {

    debugger;
    const account = evtKey;
    this.setState({
      accountToRemove: account,
      showDeleteAccountModal: true
    });
  }

  remove3rdPartyAccountModalConfirmed() {

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
      address,
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

    const { showAccountModal, show3rdPartyAccountModal, showDeleteAccountModal } = this.state;
    const { accountToRemove = null } = this.state;

    const refAccountsData = this.props.app.accounts.other || [];

    const refAccounts = refAccountsData.map((item, idx) => (
      <tr key={`ref_${idx}`}>
        <td><a href="#">${item.title}</a>{
          (item.description) ? [
            (<br />),
            <span>{ item.description }</span>
          ]: null
        }
        </td>
        <td><Button eventKey={item.id} bsStyle={"link"} onClick={this.remove3rdPartyAccountModal.bind(this)}>remove</Button>
        </td>
      </tr>
    ));

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
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a href="#">Account Title #1</a></td>
            <td>$100.00</td>
          </tr>
          { refAccounts }
          </tbody>
        </Table>


        <Modals.NewAccountModal show={showAccountModal}
                                action={this.createAccountModalConfirmed.bind(this)}
                                account={ this.props.app.accounts.create }
                                onHide={this.close.bind(this)}
                                key={0} />

        <Modals.Add3rdPartyAccountModal show={show3rdPartyAccountModal}
                                        action={this.create3rdPartyAccountModalConfirmed.bind(this)}
                                        onHide={this.close.bind(this)}
                                        key={1} />

        <Modals.RemoveAccountBookmarkModal show={showDeleteAccountModal}
                                           account={accountToRemove}
                                           action={this.remove3rdPartyAccountModalConfirmed.bind(this)}
                                           onHide={this.close.bind(this)}
                                           key={2} />

      </div>
    );
  }
}
/*
 <IndexPanel header="Other  User"><label>current user provider</label>
 <p>{this.props.currentUserUid}</p>

 <label>current user uid</label>
 <p>{this.props.currentUserProvider}</p>

 <IndexLink to="/">Home</IndexLink><br/>
 <Link to="/signin">Login</Link><br/>
 <Link to="/register">Register</Link><br/>
 <Link to="/account">Account</Link><br/>

 <label>currently selected theme</label>
 <Select
 value={this.props.theme}
 clearable={false}
 options={[
 {value: "default", label: "Default"},
 {value: "bootstrap", label: "Bootstrap"},
 {value: "materialUi", label: "Material UI"}
 ]}
 onChange={this.updateTheme.bind(this)} />

 <label>currently selected endpoint</label>
 <Select
 value={this.props.pageEndpoint}
 clearable={false}
 options={[
 {value: "default", label: "Default User Class"},
 {value: "evilUser", label: "Alternate User Class"}
 ]}
 onChange={this.updateEndpoint.bind(this)} />

 <Table>
 <thead>
 <tr>
 <th colSpan={2}>
 ajax test
 </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Default user:</td>
 <td></td>
 </tr>
 <tr>
 <td>Alternate user class:</td>
 <td></td>
 </tr>
 <tr>
 <td>Group that includes both user classes:</td>
 <td></td>
 </tr>
 </tbody>
 </Table>
 </IndexPanel>
*/

export default connect(({ auth, app }) => {
  return ({
    auth, app
  })
})(MyAccounts);