import React, { Component } from 'react'

class Count extends Component {

  goToAbout = () => {
    this.props.history.push('/about');
  }
  render() {
    return (
      <div>
        <h3>Hitung: {this.props.angka}</h3>
        <button onClick={this.goToAbout}>Pindah ke about</button>
      </div>
    )
  }
}

export default Count;
