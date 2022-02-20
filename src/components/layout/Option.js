import React, { useState } from 'react';

const Option = (props) => {
  const [checked, setChecked] = useState(props.default);
  const [label, setLabel] = useState(props.default ? props.labelOne : props.labelTwo);
  const [image, setImage] = useState(props.default ? props.imageOne : props.imageTwo);

  const onChange = () => {
    if (checked) {
      setChecked(false);
      setLabel(props.labelTwo);
      setImage(props.imageTwo);
    } else {
      setChecked(true);
      setLabel(props.labelOne);
      setImage(props.imageOne);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          borderRadius: '50vmin',
          height: '15vmin',
          width: '15vmin',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: checked ? props.colorOne : props.colorTwo,
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '14vmin',
            width: '1.3vmin',
            transform: 'rotateY(180deg) rotate(45deg)',
            backgroundColor: checked ? props.colorOne : props.colorTwo,
            zIndex: checked ? 0 : 1,
          }}
        ></div>
        <div
          style={{
            borderRadius: '50vmin',
            height: '12vmin',
            width: '12vmin',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <img
            src={image}
            alt={props.className}
            style={{
              height: props.size,
              position: 'absolute',
              top: '2.5vmin',
            }}
          />
          <b
            style={{
              marginTop: '25vmin',
              fontSize: '2.5vmin',
              textAlign: 'center',
            }}
          >
            {label}
          </b>
        </div>
      </div>
      <input
        type='checkbox'
        name={props.name}
        className={`toggleSwitch ${props.className}`}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Option;
