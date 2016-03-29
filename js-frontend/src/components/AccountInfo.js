/**
 * Created by andrew on 3/22/16.
 */
import React from "react";
import { connect } from 'react-redux';
import Spinner from "react-loader";
import * as BS  from "react-bootstrap";
import * as A from '../actions/entities';


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
      return (<div>{ accountId } <Spinner ref="spinner" loaded={false} /></div>)
    }

    const { title } = account;

    return (<div>{ title } </div>);
  }
}

export default connect(({ app }) => ({
  entities: app.data.entities
}))(AccountInfo);