import React, { Component } from "react";
import styled from "styled-components";
import FormComponent from "components/FormComponent";
import ColorWheel from "components/ColorWheel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedBackgroundColor: "",
      selectedTextColor: ""
    };
  }

  selectColor = (color, colorType) => {
    if (colorType === "background") {
      this.setState({
        selectedBackgroundColor: color
      });
    } else {
      this.setState({
        selectedTextColor: color
      });
    }
  };

  render() {
    return (
      <div>
        <ColorWheelWrapper>
          <div>
            <h1>Background Color</h1>
            <ColorWheel
              selectColor={this.selectColor}
              colorType="background"
              activeColor={this.state.selectedBackgroundColor}
            />
          </div>
          <div>
            <h1>Text Color</h1>
            <ColorWheel
              selectColor={this.selectColor}
              colorType="text"
              activeColor={this.state.selectedTextColor}
            />
          </div>
        </ColorWheelWrapper>
        <FormComponent
          backgroundColor={this.state.selectedBackgroundColor}
          textColor={this.state.selectedTextColor}
        />
      </div>
    );
  }
}

const ColorWheelWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    text-align: center;
  }
`;

export default App;
