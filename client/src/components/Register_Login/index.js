import React from "react";
import Button from "../utils/Button";
import Login from "./Login";

function RegisterLogin() {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              autem nesciunt, dolorem excepturi perferendis suscipit, magnam,
              nihil soluta provident sint facere beatae. Eius, corrupti?
            </p>
            <Button
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{ margin: "10px 0 0 0 " }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>If you have an account, please Log In</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterLogin;
