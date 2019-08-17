import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function(ComposedClass, reload, adminRoute = null) {
  class Auth extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.dispatch(auth()).then(res => {
        let user = this.props.user.userData;
        if (!user.isAuth) {
          if (reload) {
            this.props.history.push("/register-login");
          }
        } else {
          if (adminRoute && !user.isAdmin) {
            this.props.history.push("/user/dashboard");
          } else {
            if (reload === false) {
              this.props.history.push("/user/dashboard");
            }
          }
        }

        this.setState({ loading: false });
      });
    }

    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            <CircularProgress style={{ color: "#2196F3" }} />
          </div>
        );
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };

  return connect(mapStateToProps)(Auth);
}
