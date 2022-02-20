import React from 'react';

const TableRow = (props) => {
  return (
    <div className='tableRow' style={{ display: 'flex', fontSize: '2.7vmin', textAlign: 'center' }}>
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
        <button style={{ backgroundColor: props.backgroundColor }}>Reserve room</button>
      </div>
    </div>
  );
};

export default TableRow;
