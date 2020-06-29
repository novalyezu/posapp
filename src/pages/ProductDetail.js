import React, { Component } from 'react'
import Navbar from '../components/MyNavbar';
import Footer from '../components/Footer';

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render() {
    return (
      <>
        <Navbar />
        Product detail with {this.props.match.params.productName}
        <Footer />
      </>
    )
  }
}

export default ProductDetail;
