 import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      email: ['email', 'required'],
      password: ['required']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        email: this.state.email,
        password: this.state.password
      };
      console.log('RESULT', result);
      this.props.login(result);
      // console.log('\n\nSuccess!!!');
    }
  };

  checkValidation = (pageFields, stateFields) => {
    // match against current fields (current formpage fields) and all current states and only check for the current Fields.
    const formFields = {};
    Object.keys(pageFields).forEach(fieldName => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  };

  checkErrorInValidation = fields => {
    if (fields.errorCount === 0) {
      return false;
    }
    this.setState({ errorObject: fields.state }); // altering the errorObj is what triggers the error mssgs on fields.
    return true;
  };

  render() {
    console.log('LoginForm PROPS: ', this.props);

    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';
    const renderRegisterLink = (
      <Link to="/register">
        <span>Register</span>
      </Link>
    );

    return (
      <div className="loginform">
        <h1 className="text-center">Login</h1>
        
        <RenderInput label="Email" value={this.state.email} name="email" placeholder="example@gmail.com" error={this.state.errorObject.email.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderPasswordInput label="Password" value={this.state.password} name="password" error={this.state.errorObject.password.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Login" />
        <h4>Don't have an account ? {renderRegisterLink} </h4>
        
      </div>
    );
  }
}
