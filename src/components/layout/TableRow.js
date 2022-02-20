import React from 'react';

const TableRow = (props) => {
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
          room_id={props.roomId}
        >
          Reserve room
        </button>
      </div>
    </div>
  );
};

export default TableRow;
