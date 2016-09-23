/**
 * Created by andrew on 17/02/16.
 */
import React, { PropTypes } from "react";
import { Grid, Col, Navbar, NavItem, Nav, NavbarBrand, Footer } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HeaderLinks from '../HeaderLinks';

export class Container extends React.Component {
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
          </Nav>
          <div>
            <HeaderLinks />
          </div>
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

export default Container;