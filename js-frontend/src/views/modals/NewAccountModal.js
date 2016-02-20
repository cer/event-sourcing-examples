/**
 * Created by andrew on 20/02/16.
 */
import React from "react";
import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
import Select from "react-select";

export class NewAccountModal extends React.Component {
  render() {
    return (<Modal show={this.props.show} onHide={this.props.onHide} key={0}>
      <Modal.Header closeButton>
        <Modal.Title>New Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          Title <br/>
          Balance <br/>
          Description
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Cancel</Button>
        <Button bsStyle="primary" onClick={this.props.action}>Create</Button>
      </Modal.Footer>
    </Modal>);
  }
}

const mapStateToProps = (state) => ({
  //token: state.auth.token,
  //userName: state.auth.userName,
  //isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(NewAccountModal);