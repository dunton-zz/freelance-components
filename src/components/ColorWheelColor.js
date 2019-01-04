import React, { Component } from "react";
import styled from "styled-components";

const Holder = styled.div`
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
`;

const ColorSection = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  background: linear-gradient(
        -45deg,
        transparent 5px,
        ${props => props.color} 0
      )
      bottom right,
    linear-gradient(45deg, transparent 5px, ${props => props.color} 0) bottom
      left,
    linear-gradient(-145deg, transparent 5px, ${props => props.color} 0) top
      right,
    linear-gradient(145deg, transparent 5px, ${props => props.color} 0) top left;
  background-size: 60% 60%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  border: ${props => (props.selected ? 2 : 0)}px solid black;
`;

class ColorWheelColor extends Component {
  handleClick = e => {
    const { selectColor, color, colorType } = this.props;
    selectColor(color, colorType);
  };

  checkIfActive = (activeColor, color) => {
    if (activeColor === color) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { color, activeColor } = this.props;
    const isSelected = this.checkIfActive(activeColor, color);
    return (
      <Holder>
        <ColorSection
          color={color}
          onClick={this.handleClick}
          selected={isSelected}
        />
      </Holder>
    );
  }
}

export default ColorWheelColor;
