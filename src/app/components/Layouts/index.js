import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from '../Shared/NavMenu';

export default class Layouts extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
            <NavMenu />
          </Col>
          <Col sm={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
