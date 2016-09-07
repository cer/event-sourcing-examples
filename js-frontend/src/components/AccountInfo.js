/**
 * Created by andrew on 3/22/16.
 */
import React from "react";
import { connect } from 'react-redux';
import Spinner from "react-loader";
import * as BS  from "react-bootstrap";
import * as A from '../actions/entities';
import read from '../utils/readProp';
import { Route, IndexRoute, Link, IndexLink } from "react-router";

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
    const { entities, accountId, customerId } = this.props;

    const account = entities[accountId];

    if (!account || !accountId) {
      return (<div title={ `${accountId}` }>{ accountId } <Spinner loaded={false} /></div>);
      // {/*return (<Link to={ `/account/${accountId}` }>{ accountId } <Spinner loaded={false} /></Link>)*/}
    }

    const { title, owner } = account;

    if ((typeof owner !== 'undefined') && (customerId !== owner)) {
      return (<BS.Button bsStyle="link" disabled title={ `${accountId}` } style={{ padding: '0 0' }}>{ title }</BS.Button>);
    } else {
      return (<Link to={ `/account/${accountId}` }>{ title }</Link>);
    }
  }
}

export default connect(({ app }) => ({
  entities: app.data.entities,
  customerId: read(app, 'auth.user.isSignedIn', false) ? read(app, 'auth.user.attributes.id', null): null,
}))(AccountInfo);
