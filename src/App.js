import React, { Component } from 'react';
import { Stage, Text } from 'react-pixi-fiber';

class App extends Component {
  constructor() {
    super();
    this.state = {
      windowHeight: 0,
      windowWidth: 0,
    }
  }

  componentDidMount() {
    this.setStageDimensions(window);

    window.addEventListener("resize", ({ target }) => {
      this.setStageDimensions(target);
    });
  }

  setStageDimensions = (target) => {
    const { innerHeight, innerWidth } = target;
    const windowHeight = innerHeight;
    const windowWidth = innerWidth;
    this.setState({ windowHeight, windowWidth });
  }

  render() {
    return (
      <Stage width={this.state.windowWidth} height={this.state.windowHeight}>
        <Text
          anchor={{x: 0.5, y: 0.5}}
          position={{x: this.state.windowWidth / 2, y: this.state.windowHeight / 2}}
          style={{fontFamily: 'Arial', fontSize: 100, fill: 'white'}}
          text="Hello world!"
        />
      </Stage>
    );
  }
}

export default App;
