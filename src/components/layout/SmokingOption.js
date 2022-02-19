import React, { useState } from 'react';
import smoking from '../icons/cigarette.png';

const SmokingOption = () => {
  const [checked, setChecked] = useState(true);
  const [label, setLabel] = useState('Non-Smoking');

  const onChange = () => {
    if (checked) {
      setChecked(false);
      setLabel('Smoking');
    } else {
      setChecked(true);
      setLabel('Non-Smoking');
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
          backgroundColor: checked ? '#db3428' : 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '14vmin',
            width: '1.3vmin',
            transform: 'rotateY(180deg) rotate(45deg)',
            backgroundColor: checked ? '#db3428' : 'white',
            zIndex: checked ? 1 : 0,
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
            src={smoking}
            alt='smoking'
            style={{
              height: '8vmin',
              position: 'absolute',
              top: '2.5vmin',
            }}
          />
          <b
            style={{
              marginTop: '25vmin',
              fontSize: '2.8vmin',
            }}
          >
            {label}
          </b>
        </div>
      </div>
      <input
        type='checkbox'
        name='smokingToggle'
        className='smokingToggle'
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default SmokingOption;
