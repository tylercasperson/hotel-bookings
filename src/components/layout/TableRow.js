import React, { useState } from 'react';

const TableRow = (props) => {
  const [text, setText] = useState('Reserve room');

  const onClick = () => {
    console.log(text);
    if (text.split(' ')[0] === 'Undo') {
      setText('Reserve room');
    } else {
      setText('Undo Reservation');
    }
  };

  return (
    <div className='tableRow' style={{ display: 'flex', fontSize: '2.5vmin', textAlign: 'center' }}>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
        }}
      >
        {props.num_beds}
      </div>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
        }}
      >
        {props.allow_smoking}
      </div>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
        }}
      >
        {props.daily_rate}
      </div>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
        }}
      >
        {props.cleaning_fee}
      </div>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
        }}
      >
        {props.totalCharge}
      </div>
      <div
        style={{
          width: '8.5vw',
          margin: 'auto 2vw auto 2vw',
          display: 'flex',
        }}
      >
        <button
          className='reserveBtn'
          style={{ backgroundColor: props.backgroundColor }}
          onClick={props.reserveRoom}
          onClickCapture={onClick}
          room_id={props.roomId}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default TableRow;
