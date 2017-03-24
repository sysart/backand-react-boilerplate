// @flow

import paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

import ItemList from "../ItemList/ItemList";

import React, { Component } from "react";
import styled from "styled-components";

// Component styling with styled components

class App extends Component {
  render() {
    const width = 600;

    const Paper = styled(paper)`
      width: ${width}px;
      marginTop: 20px;
      padding: 20px;
      marginLeft: auto;
      marginRight: auto;
      text-align: center;
    `;


    return (
      <div className="App">
        <Paper zDepth={1}>
          <RaisedButton
            label="Load Stuff"
            primary={true}
            onTouchTap={this.props.getUser}
          />
          <section style={{ marginTop: 10 }}>
            <ItemList loading={this.props.loading} items={this.props.items} />
          </section>
        </Paper>
      </div>
    );
  }
}

export default App;
