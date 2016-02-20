/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
//import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import Select from "react-select";
import { Link, IndexLink} from "react-router";
import IndexPanel from "./../components/partials/IndexPanel";
import * as Modals from './modals';


const resetModals = {
  showAccountModal: false,
  show3rdPartyAccountModal: false,
  showDeleteAccountModal: false
};

export class Account extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { ...resetModals };
  }

  createAccountModal() {
    this.setState({
      showAccountModal: true
    });
  }

  createAccountModalConfirmed() {

  }

  accountChanged(){}

  close() {
    this.setState({
      ...resetModals
    });
  }

  render () {

    const { showAccountModal } = this.state;

    return (
      <div>
        <PageHeader>
          Accounts
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
              <Col xs={8}><strong>Account Title #1</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Balance:</Col>
              <Col xs={8}><strong>$100.00</strong></Col>
            </Row>

            <Row>
              <Col xs={4}>Description:</Col>
              <Col xs={8}><strong>Savings with progressive interest (0.7%)</strong></Col>
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
              options={[
 {value: "default", label: "Default"},
 {value: "bootstrap", label: "Bootstrap"},
 {value: "materialUi", label: "Material UI"}
 ]}
              onChange={this.accountChanged.bind(this)} />
          </Col>
          <Col xs={3}>
            <label>Amount:</label>
            </Col>
          <Col xs={3}>
            <label>Description:</label>
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
                                onHide={this.close.bind(this)}
                                key={0} />


      </div>

    );
  }
}

export default connect(({auth}) => ({auth}))(Account);