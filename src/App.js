import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times } from 'lodash';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const NUMBER_OF_PARAGRAPHS = 15;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) =>
      (<p key={index}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)
    ));


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Grid>
            <Row className="show-grid">
              <Col lg={8}>
                {paragraphs.map(paragraph => paragraph)}
              </Col>
              <Col lg={4}>Sidebar</Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
