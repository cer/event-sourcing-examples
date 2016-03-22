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

import * as A from '../../actions/entities';

export class Add3rdPartyAccountModal extends React.Component {

  handleInput(key, value) {
    this.props.dispatch(A.accountRefCreateFormUpdate(key, value));
    switch(key) {
      case 'owner':
        debugger;
        if (value) {
          this.props.dispatch(A.createRefAccountLookup(value));
        } else {
          this.props.dispatch(A.createRefAccountLookupComplete({}));
        }
    }
  }

  getOwnersOptions(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return this.props.dispatch(A.createRefOwnerLookup(input));
  }

  render() {

    const disabled = false;

    const ownersLookup = this.props.data.ownersLookup;
    const ownersOptions = ownersLookup.options;
    const ownersValue = ownersLookup.value;
    const ownersLoading = ownersLookup.loading;


    //              onInputChange={this.ownerTypeIn.bind(this)}
    //              value={ownersValue}


    return (
      <Modal show={this.props.show} onHide={this.props.onHide} key={1}>
        <Modal.Header closeButton>
          <Modal.Title>Add 3rd Party Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Owner:</label>
            <Select
              name="owner"
              clearable={true}
              isLoading={ownersLoading}
              onBlurResetsInput={false}
              asyncOptions={this.getOwnersOptions.bind(this)}
              matchProp="label"
              onChange={this.handleInput.bind(this, 'owner')} />

            <label>Account:</label>
            <Select
              name="account"
              value={this.props.theme}
              clearable={false}
              options={[
 {value: "default", label: "Default"},
 {value: "bootstrap", label: "Bootstrap"},
 {value: "materialUi", label: "Material UI"}
 ]}
              onChange={this.handleInput.bind(this, 'account')} />

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
  ui: app.ui.bookmarkAccount,
  data: app.data.bookmarkAccount
});

export default connect(mapStateToProps)(Add3rdPartyAccountModal);