import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userActions";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      },
      {
        name: "Guitars",
        linkTo: "/shop",
        public: true
      }
    ],
    user: [
      {
        name: "My cart",
        linkTo: "/user/cart",
        public: false
      },
      {
        name: "My account",
        linkTo: "/user/dashboard",
        public: false
      },
      {
        name: "Log in",
        linkTo: "/register-login",
        public: true
      },
      {
        name: "Log out",
        linkTo: "/user/logout",
        public: false
      }
    ]
  };

  showLinks = type => {
    let list = [];
    if (this.props.user.userData) {
      type.forEach(el => {
        if (!this.props.user.userData.isAuth) {
          if (el.public) {
            list.push(el);
          }
        } else {
          if (el.name !== "Log in") {
            list.push(el);
          }
        }
      });
    }
    return list.map((item, i) => {
      if (item.name !== "My cart") {
        return this.defaultLink(item, i);
      } else {
        return this.cartLink(item, i);
      }
    });
  };

  defaultLink = (item, i) =>
    item.name === "Log out" ? (
      <div className="log_out_link" key={i} onClick={this.logoutHandler}>
        {item.name}
      </div>
    ) : (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    );

  cartLink = (item, index) => {
    const user = this.props.user.userData;
    return (
      <div className="cart_link" key={index}>
        <span>{user.cart ? user.cart.length : 0}</span>
        <Link to={item.linkTo}>{item.name}</Link>
      </div>
    );
  };

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(res => {
      if (res.payload.success) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">Guitars</div>
          </div>
          <div className="right">
            <div className="top">{this.showLinks(this.state.user)}</div>
            <div className="bottom">{this.showLinks(this.state.page)}</div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(Header));
