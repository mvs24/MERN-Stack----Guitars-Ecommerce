import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Collapse from "@material-ui/core/Collapse";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";

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

  handleAngle=()=>{
      this.state.open ?  : null
  }

  render() {
    return (
      <div className="collapse_items_wrapper">
        <List style={{ borderBottom: "1px solid #dbdbdb" }}>
          <ListItem
            style={{ padding: "10px 23px 10px 0" }}
            onClick={this.handleClick}
          >
              <ListItemText 
              className='collapse_title'
              primary={this.props.title}
              />
            {this.handleAngle()}
          </ListItem>
        </List>
      </div>
    );
  }
}
export default connect()(CollapseCheckbox);
