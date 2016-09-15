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

  preprocessItems(input, currentAccountId) {
    return input
      .sort((a, b) => ((a.date - b.date)))
      .filter(({ entryType, toAccountId, fromAccountId}) => ((entryType !=='transaction') || (fromAccountId === currentAccountId) || (toAccountId === currentAccountId)))
      .reduce(({
        items, balance
      }, v) => {
        if (v.entryType == 'account') {
          balance = v.initialBalance;
        } else if (v.entryType == 'transaction' && (v.status !== 'FAILED_DUE_TO_INSUFFICIENT_FUNDS')) {
          const isOriginating = v.fromAccountId == currentAccountId;
          balance += (isOriginating ? -1 : 1) * v.amount;
        }
        v.balance = balance;
        items.push(v);
        return { items, balance };
      }, {
        items: [],
        balance: 0
      }).items
      .sort((a, b) => (-(a.date - b.date)))
  }

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
      this.preprocessItems(data, currentAccountId)
        .map(({
          entryType,
          amount,
          fromAccountId,
          toAccountId,
          transactionId,
          description = '—',
          date = null,
          status = '—',
          balance,
          initialBalance = null
        }) => {

          const transferTimestamp = new Date(date);
          const timeAgoTitle = transferTimestamp.toLocaleDateString() + ' ' + transferTimestamp.toLocaleTimeString();

          if (entryType == 'account') {
            return (<tr>
              <td><TimeAgo date={date} title={ timeAgoTitle } /></td>
              <td colSpan="3">Account created</td>
              <td><Money amount={ initialBalance } /></td>
              <td>{ description }</td>
              <td>{ status || '—' }</td>
            </tr>);
          }

          const isOriginating = fromAccountId == currentAccountId;
          const directionMarkup = isOriginating ? 'Debit' : 'Credit';
          const counterAccountMarkup = isOriginating ?
            <AccountInfo accountId={ toAccountId } /> :
            <AccountInfo accountId={ fromAccountId } />;

          return (<tr key={ transactionId }>
            <td><TimeAgo date={date} title={ timeAgoTitle } /></td>
            <td>{ directionMarkup }</td>
            <td>{ counterAccountMarkup }</td>
            <td><Money amount={ amount } /></td>
            <td><Money amount={ balance } /></td>
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
          <th>Balance</th>
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