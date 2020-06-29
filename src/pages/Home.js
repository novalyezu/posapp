import React, { Component } from 'react';
import axios from 'axios';
import Product from '../components/Product';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      role: 1,
      products: [],
      name: '',
      image: '',
      price: 0,
      qty: 0
    }
  }

  getAllProduct = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'GET',
      url: 'http://localhost:3000/products',
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({
        products: response.data.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.data[0].token);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handlePostProduct = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('image', this.state.image[0]);
    formData.append('price', this.state.price);
    formData.append('qty', this.state.qty);
    axios({
      method: 'POST',
      url: 'http://localhost:3000/products',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useQuery = () => {
    return new URLSearchParams(this.props.location.search);
  }

  componentDidMount() {
    this.getAllProduct();
    console.log(this.props);
    // let query = this.useQuery().get('search');
    // let page = this.useQuery().get('page');
    // console.log(query);
    // console.log(page);
    if(this.state.role === 2) {
      this.props.history.push('/about');
    }
  }

  render() {
    return(
      <>
      <h1>Home</h1>
      <form onSubmit={this.handleLogin}>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}></input>
        </div>
        <input type='submit' value='Login'></input>
      </form>
      <br/>
      {/* {this.state.products.map((product) => {
        return <Product key={product.id} name={product.name} price={product.price} />
      })} */}
      <form onSubmit={this.handlePostProduct}>
        <div>
          <label>Name</label>
          <input type='text' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
        </div>
        <div>
          <label>Image</label>
          <input type='file' onChange={(e) => this.setState({image: e.target.files})}></input>
        </div>
        <div>
          <label>Price</label>
          <input type='text' value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}></input>
        </div>
        <div>
          <label>Qty</label>
          <input type='text' value={this.state.qty} onChange={(e) => this.setState({qty: e.target.value})}></input>
        </div>
        <input type='submit' value='Create'></input>
      </form>
      </>
    )
  }
}

export default Home;
