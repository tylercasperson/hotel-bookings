import React, { useRef, useState } from 'react';
import { differenceInDays } from 'date-fns';
import { dateFormat } from '../data/dateFormulas';
import DateSlider from '../layout/calendar/DateSlider';
import Option from '../layout/Option';
import Button from '../layout/Button';
import TableData from '../layout/TableData';

import cigarette from '../icons/cigarette.png';
import singleBed from '../icons/singleBed.png';
import doubleBed from '../icons/doubleBed.png';

import requests from '../data/requests.json';
import reservations from '../data/reservations.json';
import rooms from '../data/rooms.json';

const BookAroom = () => {
  const reservationForm = useRef();

  const [availableRoomsArr, setAvailableRoomsArr] = useState([]);
  const [message, setMessage] = useState('Please enter information for available hotel rooms');

  const getDates = () => {
    let dateSection = reservationForm.current.children[0].children[0].children;
    let startDate = dateSection[0].children[0].children[1].value;
    let endDate = dateSection[1].children[0].children[1].value;

    return { startDate, endDate };
  };

  const onClick = () => {
    console.log('click');
    let dateSection = reservationForm.current.children[0].children[0].children;
    let startDate = dateSection[0].children[0].children[1].value;
    let endDate = dateSection[1].children[0].children[1].value;

    let toggleSection = reservationForm.current.children[1];
    let smokingOption = toggleSection.children[0].children[0].children[0].style['background-color'];
    let bedOption = toggleSection.children[1].children[0].children[1].children[1].innerText;
    let bedChoice = bedOption.split(' ')[0] === 'Single' ? 1 : 2;
    let bedsPerRoom = bedChoice === 1 ? rooms.rooms : rooms.rooms.filter((i) => i.num_beds === 2);
    let andSmokingChoice = bedsPerRoom
      .filter((i) => i.allow_smoking === (smokingOption === 'white'))
      .sort((a, b) => a.daily_rate - b.daily_rate);
    let reservationList = rooms.rooms
      .map((i) => ({
        ...i,
        ...reservations.reservations.find((j) => j.room_id === i.id),
      }))
      .filter((k) => k.checkin_date !== undefined);
    let reserveredRoomsDates = reservationList.filter(
      (i) =>
        (new Date(dateFormat(i.checkin_date)) >= new Date(startDate) &&
          new Date(dateFormat(i.checkin_date)) <= new Date(endDate)) ||
        (new Date(dateFormat(i.checkout_date)) >= new Date(startDate) &&
          new Date(dateFormat(i.checkout_date)) <= new Date(endDate))
    );
    let occupied = reserveredRoomsDates.filter((i) =>
      andSmokingChoice.find((j) => i.room_id === j.id)
    );

    for (let i = 0; i < occupied.length; i++) {
      for (let j = 0; j < andSmokingChoice.length; j++) {
        if (i.id === j.id) {
          andSmokingChoice.splice(andSmokingChoice.indexOf(andSmokingChoice[j]), 1);
        }
      }
    }

    setAvailableRoomsArr(andSmokingChoice);

    if (andSmokingChoice.length === 0) {
      setMessage('No rooms are available that fit your qualifications');
    }
  };
  return (
    <div ref={reservationForm}>
      <DateSlider />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Option
          default={false}
          imageOne={cigarette}
          colorOne={'white'}
          labelOne={'Smoking'}
          imageTwo={cigarette}
          labelTwo={'Non-Smoking'}
          colorTwo={'#db3428'}
          size={'8vmin'}
          name={'smokingToggle'}
          className={'smokingToggle'}
        />
        <Option
          default={true}
          imageOne={doubleBed}
          labelOne={'Double Bed'}
          imageTwo={singleBed}
          labelTwo={'Single Bed'}
          size={'12vmin'}
          name={'bedToggle'}
          className={'bedToggle'}
        />
      </div>
      <Button onClick={onClick} />
      {availableRoomsArr.length === 0 ? (
        <div style={{ textAlign: 'center', fontSize: '4vmin', fontWeight: '600' }}>{message}</div>
      ) : (
        <TableData
          array={availableRoomsArr}
          numberOfDays={
            differenceInDays(new Date(getDates().endDate), new Date(getDates().startDate)) + 1
          }
        />
      )}
    </div>
  );
};

export default BookAroom;
