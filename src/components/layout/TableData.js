import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const TableData = (props) => {
  console.log(props.numberOfDays);
  return (
    <div
      style={{
        display: 'table',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '1.5vw',
      }}
    >
      <TableHeader />
      <div style={{ height: '20vh', overflowY: 'auto' }}>
        {props.array.map((i, index) => (
          <TableRow
            key={index}
            num_beds={i.num_beds}
            allow_smoking={i.allow_smoking ? 'Yes' : 'No'}
            daily_rate={i.daily_rate}
            cleaning_fee={i.cleaning_fee}
            totalCharge={i.daily_rate * props.numberOfDays + i.cleaning_fee}
            backgroundColor={index % 2 === 0 ? '#bdbdbd' : '#9f9f9f'}
            roomId={i.id}
            reserveRoom={props.reserveRoom}
            text={props.roomReserved ? 'Reserve room' : 'Undo Reservation'}
          />
        ))}
      </div>
    </div>
  );
};

export default TableData;
