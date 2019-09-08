import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";
import Collapse from "@material-ui/core/Collapse";

class CollapseCheckbox extends Component {
  state = {
    open: false,
    checked: []
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

  handleToggle = id => {
    const checked = this.state.checked;
    const currentIndex = checked.indexOf(id);

    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState(
      {
        checked: newChecked
      },
      () => this.props.handleFilters(newChecked)
    );
  };

  renderList = () =>
    this.props.list
      ? this.props.list.map(list => (
          <ListItem style={{ padding: "10px" }} key={list._id}>
            <ListItemText primary={list.name} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={() => this.handleToggle(list._id)}
                checked={this.state.checked.indexOf(list._id) !== -1}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))
      : null;
  render() {
    return (
      
      <div className="collapse_items_wrapper">
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
              {this.renderList()}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}
export default connect()(CollapseCheckbox);
