/**
 * Created by andrew on 3/22/16.
 */
import React from "react";
import Spinner from "react-loader";
import * as BS  from "react-bootstrap";
import TimeAgo from 'react-timeago';

import { Money } from './Money';
import AccountInfo from './AccountInfo';

export class TransfersTable extends React.Component {
  render() {
    const { transfers, forAccount } = this.props;
    const { loading, data, errors } = transfers || {};
    
    if (!transfers || loading) {
      return (<h2><Spinner loaded={false} /> Loading..</h2>);
    }

    if (Object.keys(errors).length) {
      return (<div className="text-danger">Errors..</div>);
    }

    const currentAccountId = forAccount;
    const transfersMarkup = data.length ?
      data
        .filter(({ toAccountId, fromAccountId}) => ((fromAccountId === currentAccountId) || (toAccountId === currentAccountId)))
        .sort((a, b) => (-(a.date - b.date)))
        .map(({
      amount,
      fromAccountId,
      toAccountId,
      transactionId,
      description = '',
      date = null,
      status = ''
    }) => {

      const isOriginating = fromAccountId == currentAccountId;
      const directionMarkup = isOriginating ? 'Debit' : 'Credit';
      const counterAccountMarkup = isOriginating ?
        <AccountInfo accountId={ toAccountId } /> :
        <AccountInfo accountId={ fromAccountId } />;

      const transferTimestamp = new Date(date);
      const timeAgoTitle = transferTimestamp.toLocaleDateString() + ' ' + transferTimestamp.toLocaleTimeString();

      return (<tr>
        <td><TimeAgo date={date} title={ timeAgoTitle } /></td>
        <td>{ directionMarkup }</td>
        <td>{ counterAccountMarkup }</td>
        <td><Money amount={ amount } /></td>
        <td>{ description || '—' }</td>
        <td>{ status || '—' }</td>
      </tr>);
    }) : (<tr>
        <td colSpan={6}>No transfers for this account just yet.</td>
      </tr>);

    return (
      <BS.Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Other Account</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        { transfersMarkup }
        </tbody>
      </BS.Table>
    );
  }
}