import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FormField from "../utils/Form/FormField";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import { loginUser } from "../../actions/userActions";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  submitHandler = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, "login");
    let formValid = isFormValid(this.state.formdata, "login");
    if (formValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then(res => {
    
       
        if (!res.payload.loginSuccess) {
          this.setState({ formError: true });
        } else {
          this.props.history.push("/dashboard");
        }
      });
    } else {
      this.setState({ formError: true });
    }
  };

  updateForm = el => {
    const newFormdata = update(el, this.state.formdata, "login");

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={this.submitHandler}>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
          {this.state.formError ? (
            <div className="error_label">Please check your data</div>
          ) : null}
          <button onClick={this.submitHandler}>Log In</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

export default connect()(withRouter(Login));
