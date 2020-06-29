import React, { useState, useEffect } from 'react';

function Hooks(props) {
  console.log(props);
  // constructor() {
  //   super()
  //   this.state: {
  //     count: 1
  //   }
  // }

  // const [profile, setProfile] = useState({firstName: '', lastName: ''});
  // const [count, setCount] = useState(2);
  // const [title, setTitle] = useState('Hooks');
  // const [x, setX] = useState(0)
  // const [y, setY] = useState(0)

  // const incrementCount = () => {
  //   // this.setState({
  //   //   count: this.state.count + 1
  //   // })
  //   setCount(count + 1)
  // }

  // useEffect()
  // componentDidMound(){}
  // useEffect(() => {
  //   console.log('Update title document');
  //   document.title = title
  // }, [])

  // compoenntDidUpdate(){}
  // useEffect(() => {
  //   console.log('Update title document');
  //   document.title = title
  // }, [title])

  // compoenntWillUnmount(){}
  // useEffect(() => {
  //   console.log('Update title document');
  //   document.title = title
  //   window.addEventListener('mousemove', logMouse);
  //   return(() => {
  //     window.removeEventListener('mousemove', logMouse);
  //   })
  // }, [])

  // const logMouse = () => {
  //   setX(Math.random())
  //   setY(Math.random())
  // }

  // useEffect(() => {
  //   console.log('Update title document');
  //   document.title = title
  //   window.addEventListener('mousemove', logMouse);
  //   return(() => {
  //     window.removeEventListener('mousemove', logMouse);
  //   })
  // }, [])
  return (
    <>
      {/* <h3>Hitung: {count}</h3>
      <button onClick={incrementCount}>+</button>
      <br></br> */}
      {/* <p>First Name - {profile.firstName}</p>
      <p>Last Name - {profile.lastName}</p>
      <input type='text' value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})} placeholder='Firstname'></input>
      <input type='text' value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})}  placeholder='Lastname'></input>
      <br/>
      {JSON.stringify(profile)} */}
      {/* <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
      <br></br>
      <p>X - {x}</p>
      <p>Y - {y}</p> */}
    </>
  )
}

export default Hooks;
