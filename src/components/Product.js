import React, { Component } from 'react';

class Product extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <span>{this.props.price}</span>
      </div>
    )
  }
}

export default Product;
