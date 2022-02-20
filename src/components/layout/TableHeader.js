import React from 'react';

const TableHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: '10px',
        textAlign: 'center',
        fontWeight: '600',
        borderBottom: '3pt solid black',
      }}
    >
      <div
        style={{
          width: '9vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Number of Beds
      </div>
      <div
        style={{
          width: '8vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Allow Smoking
      </div>
      <div
        style={{
          width: '8vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Daily Rate
      </div>
      <div
        style={{
          width: '8vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Cleaning Fee
      </div>
      <div
        style={{
          width: '8vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Total Charge
      </div>
      <div
        style={{
          width: '8vw',
          margin: 'auto 2vw auto 2vw',
          fontSize: '2.5vmin',
        }}
      >
        Reserve Room
      </div>
    </div>
  );
};

export default TableHeader;
