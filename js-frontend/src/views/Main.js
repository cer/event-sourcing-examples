/**
 * Created by andrew on 17/02/16.
 */
import React from "react";
import IndexPanel from "./../components/partials/IndexPanel";
import { PageHeader, OverlayTrigger, Tooltip, Row, ButtonGroup, Table } from "react-bootstrap";
import { Link, IndexLink} from "react-router";
import { connect } from "react-redux";
import * as BSTheme from "redux-auth/bootstrap-theme";
import * as DefaultTheme from "redux-auth";
import Select from "react-select";


class Main extends React.Component {
  updateTheme (theme) {
    //this.props.dispatch(updateDemoTheme(theme));
  }

  updateEndpoint (endpoint) {
    //this.props.dispatch(updateDemoEndpoint(endpoint));
  }

  render () {
    console.log("page endpoint", this.props.pageEndpoint);
    let Theme = BSTheme;
    let themePath = "/material-ui-theme";
    let endpointAttr = (this.props.pageEndpoint === "default")
      ? ""
      : "endpoint=\"evilUser\"";

    switch(this.props.theme) {
      case "default":
        Theme = DefaultTheme;
        themePath = "";
        break;
      case "bootstrap":
        Theme = BSTheme;
        themePath = "/bootstrap-theme";
        break;
    }

    const deployTooltip = (<Tooltip>
      Create a new instance of this demo on your own Heroku server.
    </Tooltip>);

    return (
      <div>
        <PageHeader>
          Money Transfer Demo

          <OverlayTrigger overlay={deployTooltip} placement="left">
            <a
              className="pull-right"
              href="https://heroku.com/deploy?template=https://github.com/lynndylanhurley/redux-auth-demo">
              <img src="https://www.herokucdn.com/deploy/button.svg" />
            </a>
          </OverlayTrigger>
        </PageHeader>

        <Row>
          <IndexPanel header="Current User">
            <label>current user provider</label>
            <p>{this.props.currentUserUid}</p>

            <label>current user uid</label>
            <p>{this.props.currentUserProvider}</p>

            <IndexLink to="/">Home</IndexLink><br/>
            <Link to="/signin">Login</Link><br/>
            <Link to="/register">Register</Link><br/>
            <Link to="/account">Account</Link><br/>

            <label>currently selected theme</label>
            <Select
              value={this.props.theme}
              clearable={false}
              options={[
                {value: "default", label: "Default"},
                {value: "bootstrap", label: "Bootstrap"},
                {value: "materialUi", label: "Material UI"}
                ]}
              onChange={this.updateTheme.bind(this)} />

            <label>currently selected endpoint</label>
            <Select
              value={this.props.pageEndpoint}
              clearable={false}
              options={[
                {value: "default", label: "Default User Class"},
                {value: "evilUser", label: "Alternate User Class"}
              ]}
              onChange={this.updateEndpoint.bind(this)} />

            <Table>
              <thead>
              <tr>
                <th colSpan={2}>
                  ajax test
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Default user:</td>
                <td></td>
              </tr>
              <tr>
                <td>Alternate user class:</td>
                <td></td>
              </tr>
              <tr>
                <td>Group that includes both user classes:</td>
                <td></td>
              </tr>
              </tbody>
            </Table>
          </IndexPanel>

          <IndexPanel header="Other  User"></IndexPanel>


        </Row>
      </div>
    );
  }
}

export default connect(({auth, demoUi = new Map()}) => {
  return ({
    currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
    currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none",
    currentUserEndpoint: auth.getIn(["user", "endpointKey"]) || "none",
    theme: demoUi.get("theme"),
    pageEndpoint: demoUi.get("endpoint")
  })
})(Main);