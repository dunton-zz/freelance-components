import React, { Component } from "react";
import styled from "styled-components";

const FormField = styled.label`
  display: block;
  background-color: ${props => props.backgroundColor};

  padding: 10px;
  &:first-of-type {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-of-type {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const FormInput = styled.input`
  background-color: ${props => props.backgroundColor};
  border: none;
  color: ${props => props.textColor};
  width: 96%;
  padding: 2%;
  border-radius: 20px;
  font-size: 20px;
  border: ${props => (props.error ? 5 : 0)}px solid red;

  ::placeholder {
    ${props => props.textColor}
  }

  &:focus {
    outline: none;
    border: 1px solid #333300;
  }
`;

const FormWrapper = styled.form`
  width: 80%;
  margin: 50px auto;
  border-radius: 20px;
  box-shadow: 0 0 0 0.6em #000;
`;

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      fullNameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        if (/^[A-Z]$/i.test(value)) {
          console.log("alpha");
        }
        this.setState({
          fullName: value
        });
        break;
      case "email_address":
        this.setState({
          email: value
        });
        break;
      case "password":
        this.setState({
          password: value
        });
        break;
      case "confirmPassword":
        this.setState(
          {
            confirmPassword: value
          },
          () => {
            this.checkPassword(name);
          }
        );
        break;
      default:
        throw Error("BAD FIELD NAME");
    }
  };

  checkErrors = (fieldName, addError) => {
    switch (fieldName) {
      case "fullName":
        if (addError) {
          this.setState({
            fullNameError: true
          });
        } else {
          this.setState({
            fullNameError: false
          });
        }
        break;
      case "email_address":
        if (addError) {
          this.setState({
            emailError: true
          });
        } else {
          this.setState({
            emailError: false
          });
        }
        break;
      case "password":
        if (addError) {
          this.setState({
            passwordError: true
          });
        } else {
          this.setState({
            passwordError: false
          });
        }
        break;
      case "confirmPassword":
        if (addError) {
          this.setState({
            confirmPasswordError: true
          });
        } else {
          this.setState({
            confirmPasswordError: false
          });
        }
        break;
      default:
        throw Error("BAD ERROR NAME");
    }
  };

  checkPassword = fieldName => {
    const { password, confirmPassword } = this.state;
    const confirmPasswordLength = confirmPassword.length;
    const initialPassword = password.slice(0, confirmPasswordLength);
    if (initialPassword !== confirmPassword) {
      this.checkErrors(fieldName, true);
    } else {
      this.checkErrors(fieldName);
    }
  };

  render() {
    const { backgroundColor, textColor } = this.props;
    return (
      <FormWrapper>
        <FormField
          backgroundColor={backgroundColor}
          error={this.state.fullNameError}
        >
          <FormInput
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleInput}
            name="fullName"
            backgroundColor={backgroundColor}
            textColor={textColor}
            type="text"
          />
        </FormField>
        <FormField
          backgroundColor={backgroundColor}
          error={this.state.emailError}
        >
          <FormInput
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleInput}
            name="email_address"
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        </FormField>
        <FormField
          backgroundColor={backgroundColor}
          error={this.state.passwordError}
        >
          <FormInput
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
            name="password"
            backgroundColor={backgroundColor}
            textColor={textColor}
            type="password"
          />
        </FormField>
        <FormField
          backgroundColor={backgroundColor}
          error={this.state.confirmPasswordError}
        >
          <FormInput
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleInput}
            name="confirmPassword"
            backgroundColor={backgroundColor}
            textColor={textColor}
            type="password"
          />
        </FormField>
      </FormWrapper>
    );
  }
}

export default FormComponent;
