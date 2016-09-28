/**
 * Created by andrew on 20/02/16.
 */
import React from "react";
// import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import * as BS from "react-bootstrap";
import ButtonLoader from "../../controls/bootstrap/ButtonLoader";
import Input from "../../controls/bootstrap/Input";
import AuxErrorLabel from "../../controls/bootstrap/AuxErrorLabel";
import read from '../../utils/readProp';

import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
import Select from "react-select";

import * as A from '../../actions/entities';

const formValidation = (payload) => ['owner', 'account', 'title', 'description'].reduce((memo, prop) => {
  let result = [];
  const value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');

  switch (prop) {
    case 'owner':
    case 'account':
    case 'title':
      if (/^$/.test(value)) {
        result.push('required');
      }
  }

  switch (prop) {
    case 'description':
      if (value.length > 400) {
        result.push('need to less than 400 symbols long');
      }
  }

  if (result.length) {
    memo[prop] = result;
    memo.hasErrors = true;
  }
  return memo;
}, {});


export class Add3rdPartyAccountModal extends React.Component {

  handleInput(key, value) {
    this.props.dispatch(A.accountRefCreateFormUpdate(key, value));
    switch(key) {
      case 'owner':
        if (value) {
          this.props.dispatch(A.createRefAccountLookup(value));
        } else {
          this.props.dispatch(A.createRefAccountLookupComplete([]));
        }
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const payload = { ...this.props.data.form };

    const validationErrors = formValidation(payload);
    if (validationErrors.hasErrors) {
      this.props.dispatch(A.accountRefCreateError(validationErrors));
      return;
    }

    const { action } = this.props;

    if (action) {
      action(payload);
    }
  }

  onHide() {
    this.props.dispatch(A.accountRefCreateComplete({}));
    if (this.props.onHide) {
      this.props.onHide();
    }
  }

  getOwnersOptions(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return this.props.dispatch(A.createRefOwnerLookup(input));
  }

  render() {
    const disabled = read(this.props.data, 'loading', false);

    const ownersLoading = read(this.props.data, 'ownersLookup.loading', false);

    const formErrors = read(this.props.data, 'errors.errors', '');

    return (
      <BS.Modal show={this.props.show} onHide={this.onHide.bind(this)} key={1}>
        <BS.Modal.Header closeButton>
          <BS.Modal.Title>Add 3rd Party Account</BS.Modal.Title>
        </BS.Modal.Header>
        <BS.Modal.Body>
          <form  className="account-create-ref clearfix">
            <div className="form-group" style={{
            display: formErrors ? 'block' : 'none'
            }}>
              <AuxErrorLabel
                label="Form:"
                errors={formErrors.length ? [formErrors] : [] }
              />
            </div>

            <label>Owner:</label>
            <div className="form-group">
              <Select
                name="owner"
                onBlurResetsInput={false}
                asyncOptions={this.getOwnersOptions.bind(this)}
                matchProp="label"
                onChange={this.handleInput.bind(this, 'owner')}
                value={read(this.props.data, 'form.owner', '')}
                disabled={disabled}
              />
              <AuxErrorLabel
                label="Owner:"
                errors={read(this.props.data, 'errors.owner', [])}
              />
            </div>

            <label>Account:</label>
            <div className="form-group">
              <Select
                name="account"
                value={read(this.props.data, 'form.account', '')}
                disabled={ownersLoading || disabled}
                clearable={false}
                searchable={false}
                options={read(this.props.data, 'accountsLookup.options', [])}
                onChange={this.handleInput.bind(this, 'account')} />
              <AuxErrorLabel
                label="Account:"
                errors={read(this.props.data, 'errors.account', [])}
              />
            </div>

            <Input type="text"
                   className="account-create-description"
                   label="Title:"
                   placeholder="Title"
                   name="title"
                   disabled={disabled}
                   value={read(this.props.data, 'form.title', '')}
                   errors={read(this.props.data, 'errors.title', [])}
                   onChange={this.handleInput.bind(this, 'title')} />

            <Input type="textarea"
                   className="account-create-description"
                   label="Description:"
                   placeholder="Description"
                   name="description"
                   disabled={disabled}
                   value={read(this.props.data, 'form.description', '')}
                   errors={read(this.props.data, 'errors.description', [])}
                   onChange={this.handleInput.bind(this, 'description')} />
          </form>
        </BS.Modal.Body>
        <BS.Modal.Footer>
          <BS.Button onClick={this.onHide.bind(this)}>Cancel</BS.Button>
          <ButtonLoader loading={read(this.props.data, 'loading', false)}
                        type="submit"
                        bsStyle="primary"
                        icon={<BS.Glyphicon glyph="plus" />}
                        disabled={disabled}
                        onClick={this.handleSubmit.bind(this)}>
            Add
          </ButtonLoader>
        </BS.Modal.Footer>
      </BS.Modal>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  ui: app.ui.bookmarkAccount,
  data: app.data.bookmarkAccount
});

export default connect(mapStateToProps)(Add3rdPartyAccountModal);