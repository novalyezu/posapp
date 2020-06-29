import React, { Component } from 'react';
import Navbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class About extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount() {
    document.title = 'About'
  }

  componentDidUpdate() {
    console.log('did update!');
  }

  componentWillUnmount() {
    console.log('unmount about!');
  }
  render() {
    return(
      <>
        <Navbar />
        <h1>Ini About</h1>
        <h1> {this.state.count} </h1>
        <button onClick={this.addCount}>Add</button>
        <Link to='/hooks'>Hooks</Link>
        <Footer />
      </>
    )
  }
}

export default About;
