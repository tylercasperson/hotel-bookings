import React from 'react';

const Button = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div style={{ margin: '30vmin' }}>
      <div className={'button'} onClick={onClick}>
        Find available rooms
      </div>
    </div>
  );
};

export default Button;
