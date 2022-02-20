import React from 'react';

const Button = (props) => {
  return (
    <div style={{ marginTop: '25vh', marginBottom: '10vh' }}>
      <div className={'button'} onClick={props.onClick}>
        Find available rooms
      </div>
    </div>
  );
};

export default Button;
