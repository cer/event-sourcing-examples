/**
 * Created by andrew on 3/22/16.
 */
import React from "react";
import { connect } from 'react-redux';
import Spinner from "react-loader";
// import * as BS  from "react-bootstrap";
import * as A from '../actions/entities';
import { Route, IndexRoute, Link, IndexLink } from "react-router";


// import { Money } from '../components/Money';

export class AccountInfo extends React.Component {
  componentWillMount() {
    this.ensureData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.ensureData(nextProps);
  }

  ensureData({ dispatch, entities, accountId }) {
    if (entities[accountId]) {
      return;
    }
    dispatch(A.fetchAccount(accountId));
  }

  render() {
    const { entities, accountId } = this.props;

    const account = entities[accountId];

    if (!account) {
      return (<Link to={ `/account/${accountId}` }>{ accountId } <Spinner loaded={false} /></Link>)
    }

    const { title } = account;

    return (<Link to={ `/account/${accountId}` }>{ title }</Link>);
  }
}

export default connect(({ app }) => ({
  entities: app.data.entities
}))(AccountInfo);
