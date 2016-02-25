/**
 * Created by andrew on 17/02/16.
 */
import React, { PropTypes } from "react";
import { Grid, Col, Navbar, NavItem, Nav, NavbarBrand, Footer } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { SignOutButton } from "redux-auth/bootstrap-theme";

//if (!global.__SERVER__ && !global.__TEST__) {
//  require("../../styles/main.scss");
//}

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <div className="wrapper">
        <Navbar className="main-nav">
          <LinkContainer to="/">
            <NavbarBrand>Money Transfer</NavbarBrand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/" onlyActiveOnIndex={true}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <NavItem eventKey={2}>Account</NavItem>
            </LinkContainer>
          </Nav>
          <Nav right={true}>
            <SignOutButton></SignOutButton>
          </Nav>
        </Navbar>

        <Grid className="content">
          {this.props.children}
        </Grid>

        <Navbar fixedBottom={true} className="footer-navigation">
          <Col xs={12} sm={6}>&copy; 2016 Eventuate.io</Col>
          <Col xs={12} sm={6} className="text-right">
            <a href="#">Terms</a> |&nbsp;
            <a href="#">Policy</a> |&nbsp;
            <a href="#">Contact</a> |&nbsp;
            <a href="#">About</a>
          </Col>
        </Navbar>
      </div>
    );
  }
}
/*<a href="https://github.com/lynndylanhurley/redux-auth">
 <img
 style={{position: "absolute", top: 0, right: 0, border: 0}}
 src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
 alt="Fork me on GitHub"
 data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
 </a>*/
export default Container;