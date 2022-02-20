import React from 'react';

const Button = (props) => {
  return (
    <div style={{ margin: '30vmin' }}>
      <div className={'button'} onClick={props.onClick}>
        Find available rooms
      </div>
    </div>
  );
};

export default Button;
