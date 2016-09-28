/**
 * Created by andrew on 20/02/16.
 */
import React, { PropTypes } from "react";
import { connect } from "react-redux";

import * as BS from "react-bootstrap";
import Input from "../../controls/bootstrap/Input";
import ButtonLoader from "../../controls/bootstrap/ButtonLoader";
//import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";

import { Link, IndexLink} from "react-router";
import read from '../../utils/readProp';

import { accountCreateFormUpdate, accountCreateError } from '../../actions/entities';

const formValidation = (payload) => ['title', 'balance', 'description'].reduce((memo, prop) => {
  let result = [];
  const value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');

  switch (prop) {
    case 'title':
    case 'balance':
      if (/^$/.test(value)) {
        result.push('required');
      }
  }

  switch (prop) {
    case 'balance':
      if (!/\d+/.test(value)) {
        result.push('need to be a number');
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

export class NewAccountModal extends React.Component {

  static propTypes = {
    action: PropTypes.func,
    account: PropTypes.object.isRequired
  };
  
  handleSubmit(event) {
    event.preventDefault();

    const payload = { ...this.props.account.form };

    const validationErrors = formValidation(payload);
    if (validationErrors.hasErrors) {
      this.props.dispatch(accountCreateError(validationErrors));
      return;
    }

    const { action } = this.props;

    if (action) {
      action(payload);
    }
  }

  handleInput(key, val) {
      this.props.dispatch(accountCreateFormUpdate(key, val));
  }

  render() {

    const disabled = (
      this.props.account.loading
    );

    const actionLabel = 'Create';

    return (<BS.Modal show={this.props.show} onHide={this.props.onHide} key={0}>
      <BS.Modal.Header closeButton>
        <BS.Modal.Title>New Account</BS.Modal.Title>
      </BS.Modal.Header>
      <BS.Modal.Body>
        <form className="account-create-form clearfix"
              onSubmit={this.handleSubmit.bind(this)}>

          <Input type="text"
                 className="account-create-title"
                 label="Title"
                 placeholder="Title"
                 name="title"
                 disabled={disabled}
                 value={read(this.props.account, 'form.title', '')}
                 errors={read(this.props.account, 'errors.title', [])}
                 onChange={this.handleInput.bind(this, "title")}
          />

          <Input type="text"
                 className="account-create-balance"
                 label="Balance"
                 placeholder="Balance"
                 name="balance"
                 addonBefore={
                 (<BS.Glyphicon glyph="usd" />)
                 }
                 addonAfter=".00"
                 disabled={disabled}
                 value={read(this.props.account, 'form.balance', '')}
                 errors={read(this.props.account, 'errors.balance', [])}
                 onChange={this.handleInput.bind(this, 'balance')}
          />

          <Input type="textarea"
                 className="account-create-description"
                 label="Description"
                 placeholder="Description"
                 name="description"
                 disabled={disabled}
                 value={read(this.props.account, 'form.description', '') || ''}
                 errors={read(this.props.account, 'errors.description', [])}
                 onChange={this.handleInput.bind(this, 'description')}
           />


        </form>

      </BS.Modal.Body>
      <BS.Modal.Footer>
        <BS.Button onClick={this.props.onHide}>Cancel</BS.Button>
        <ButtonLoader loading={read(this.props.account, 'loading', false)}
                      type="submit"
                      bsStyle="primary"
                      icon={<BS.Glyphicon glyph="plus" />}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
          >
          {actionLabel}
        </ButtonLoader>
      </BS.Modal.Footer>
    </BS.Modal>);
  }
}

export default connect()(NewAccountModal);