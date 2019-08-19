import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return `/images/image_not_available.png`;
    }
  }
  render() {
    return (
      <div className={`card_item_wrapper ${this.props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(
              this.props.images
            )}) no-repeat`
          }}
        />
        <div className="action_container">
          <div className="tags">
            <div className="brand">{this.props.brand.name}</div>
            <div className="brand">{this.props.name}</div>
            <div className="brand">${this.props.price}</div>
          </div>
        </div>
        {
            this.props.grid ? (<div className='description'>
                sdcs
            </div>) : null
        }
        <div className="">
            
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Card);
