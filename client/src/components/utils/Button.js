import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  const buttons = () => {
    let template = null;
    switch (props.type) {
      case "default":
        template = (
          <Link className="link_default" to={props.linkTo} {...props.addStyles}>
            {props.title}
          </Link>
        );
        break;
      default:
        template = null;
        break;
    }
    return template;
  };

  return <div>{buttons()}</div>;
}
