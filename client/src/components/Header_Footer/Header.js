import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
      return this.defaultLink(item, i);
    });
  };

  defaultLink = (item, i) => (
    <Link to={item.linkTo} key={i}>
      {item.name}
    </Link>
  );

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

export default connect(mapStateToProps)(Header);
