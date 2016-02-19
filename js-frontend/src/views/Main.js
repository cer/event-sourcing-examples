/**
 * Created by andrew on 17/02/16.
 */
import React from "react";
import IndexPanel from "./../components/partials/IndexPanel";
import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
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

    //const deployTooltip = (<Tooltip>
    //  Create a new instance of this demo on your own Heroku server.
    //</Tooltip>);

    return (
      <div>
        <PageHeader>
            My Accounts
          <Nav pullRight="true">
            <ButtonGroup pullRight="true">
              <Button bsStyle="link">Create Account</Button>
              <Button bsStyle="link">Add 3rd Party Recipients</Button>
            </ButtonGroup>
          </Nav>
        </PageHeader>

        <Row>
          <IndexPanel header="Personal Info:">

            <Row>
              <Col xs="4">Customer:</Col>
              <Col xs="8"><strong>Kevin McCallister</strong></Col>
            </Row>

            <Row>
              <Col xs="4">Email:</Col>
              <Col xs="8"><strong>current@email.com</strong></Col>
            </Row>

            <Row>
              <Col xs="4">SSN:</Col>
              <Col xs="8"><strong>1234567890-09876</strong></Col>
            </Row>


          </IndexPanel>


        </Row>
        <Table>
          <thead>
          <tr>
            <th>Account Title</th>
            <th>Balance</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><a href="#">Account Title #1</a></td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td><a href="#">Account Title #1</a></td>
            <td>$150.00</td>
          </tr>
          </tbody>
        </Table>

      </div>
    );
  }
}
/*
 <IndexPanel header="Other  User"><label>current user provider</label>
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
*/

export default connect(({auth, demoUi = new Map()}) => {
  return ({
    currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
    currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none",
    currentUserEndpoint: auth.getIn(["user", "endpointKey"]) || "none",
    theme: demoUi.get("theme"),
    pageEndpoint: demoUi.get("endpoint")
  })
})(Main);