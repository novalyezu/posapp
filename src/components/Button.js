import React from 'react';
import { Button } from 'reactstrap';

const MyButton = ({ title='Default' }) => {
  console.log(title);
  return (
    <div className="App">
      <Button type="primary">{title}</Button>
    </div>
  )
}

export default MyButton;
