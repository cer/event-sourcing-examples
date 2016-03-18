/**
 * Created by andrew on 20/02/16.
 */
import React from "react";
import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import * as BS from "react-bootstrap";
import Input from "../../controls/bootstrap/Input";
import read from '../../utils/readProp';

import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
import Select from "react-select";

export class Add3rdPartyAccountModal extends React.Component {


  ownerTypeIn(argq, arg2, arg3) {
    debugger;
  }

  ownerChanged(argq, arg2, arg3) {
    debugger;
  }

  accountChanged(argq, arg2, arg3) {
    debugger;
  }

  handleInput() {}

  render() {

    const disabled = false;

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
              onInputChange={this.ownerTypeIn.bind(this)}
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

            <Input type="textarea"
                   className="account-create-description"
                   label="Description:"
                   placeholder="Description"
                   name="description"
                   disabled={disabled}
                   value={read(this.props, 'account.form.description', '')}
                   errors={read(this.props, 'account.errors.description', [])}
                   onChange={this.handleInput.bind(this, 'description')} />
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

const mapStateToProps = ({ app }) => ({
  ui: app.ui.bookmarkAccount
});

export default connect(mapStateToProps)(Add3rdPartyAccountModal);