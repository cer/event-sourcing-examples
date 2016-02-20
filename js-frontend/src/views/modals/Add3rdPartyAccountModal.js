/**
 * Created by andrew on 20/02/16.
 */
import React from "react";
import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
import Select from "react-select";

export class Add3rdPartyAccountModal extends React.Component {

  ownerChanged(argq, arg2, arg3) {
    debugger;
  }

  accountChanged(argq, arg2, arg3) {
    debugger;
  }

  render() {

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} key={1}>
        <Modal.Header closeButton>
          <Modal.Title>Add 3rd Party Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Owner:</label>
            <Select
              value={this.props.theme}
              clearable={false}
              options={[
 {value: "default", label: "Default"},
 {value: "bootstrap", label: "Bootstrap"},
 {value: "materialUi", label: "Material UI"}
 ]}
              onChange={this.ownerChanged.bind(this)} />
            <label>Account:</label>
            <Select
              value={this.props.theme}
              clearable={false}
              options={[
 {value: "default", label: "Default"},
 {value: "bootstrap", label: "Bootstrap"},
 {value: "materialUi", label: "Material UI"}
 ]}
              onChange={this.accountChanged.bind(this)} />
            <label>Account:</label>
            <div>Description</div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Cancel</Button>
          <Button bsStyle="primary" onClick={this.props.action}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  //token: state.auth.token,
  //userName: state.auth.userName,
  //isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Add3rdPartyAccountModal);