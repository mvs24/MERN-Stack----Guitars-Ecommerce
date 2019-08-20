import React, { Component } from "react";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CollapseRadio extends Component {
  state = {
    open: false,
    value: 0
  };
  componentDidMount() {
    if (this.props.initState) {
      this.setState({
        open: this.props.initState
      });
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleAngle = () =>
    this.state.open ? (
      <FontAwesomeIcon className="icon" icon={faAngleUp} />
    ) : (
      <FontAwesomeIcon className="icon" icon={faAngleDown} />
    );

  render() {
    return (
        <List style={{ borderBottom: "1px solid #dbdbdb" }}>
          <ListItem
            style={{ padding: "10px 23px 10px 0" }}
            onClick={this.handleClick}
          >
            <ListItemText
              className="collapse_title"
              primary={this.props.title}
            />
            {this.handleAngle()}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemText
              className="collapse_title"
              primary={this.props.title}
            />
            </List>
          </Collapse>
        </List>
    )
  }
}
