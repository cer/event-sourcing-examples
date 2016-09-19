/**
 * Created by andrew on 20/02/16.
 */
import React, { PropTypes } from "react";
import * as BS from 'react-bootstrap';
import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
import { moneyText } from '../../components/Money';

export class RemoveAccountBookmarkModal extends React.Component {

  static propTypes = {
    action: PropTypes.func,
    account: PropTypes.object
  };

  handleAction(evt) {
    evt.preventDefault();
    const { action, account } = this.props;
    if (action) {
      action(account);
    }
  }

  render() {
    const { account } = this.props;

    const { title: titleRaw,
      description: descriptionRaw,
      balance: balanceRaw,
      id,
      accountId } = account || {};

    const entityId = id || accountId;

    const title = titleRaw || '—';
    const balance = moneyText(balanceRaw);
    const description = descriptionRaw || '—';

    return (<Modal show={this.props.show} onHide={this.props.onHide} key={0}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Account Bookmark</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form className="form-horizontal">
          <BS.FormControls.Static label="Title" labelClassName="col-xs-2" wrapperClassName="col-xs-10">{ title }</BS.FormControls.Static>
          <BS.FormControls.Static label="Balance" labelClassName="col-xs-2" wrapperClassName="col-xs-10">{ balance }</BS.FormControls.Static>
          <BS.FormControls.Static label="Description" labelClassName="col-xs-2" wrapperClassName="col-xs-10">{ description }</BS.FormControls.Static>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Cancel</Button>
        <Button bsStyle="danger" eventKey={ entityId } onClick={this.handleAction.bind(this)}>Remove</Button>
      </Modal.Footer>
    </Modal>);
  }
}

export default RemoveAccountBookmarkModal;