import React from 'react';

const Button = (props) => {
  return (
    <div style={{ marginTop: '25vh', marginBottom: '10vh' }}>
      <div
        className={`button ${props.className}`}
        style={{ backgroundColor: props.backgroundColor }}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Button;
