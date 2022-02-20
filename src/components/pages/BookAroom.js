import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { differenceInDays, max, min } from 'date-fns';

import { saveReservation, undoReservation } from '../data/actions/reservationActions';

import { availableRooms } from '../data/formulas/availableRooms';
import requests from '../data/initialData/requests.json';
import reservations from '../data/initialData/reservations.json';

import DateSlider from '../layout/calendar/DateSlider';
import Option from '../layout/Option';
import Button from '../layout/Button';
import TableData from '../layout/TableData';

import cigarette from '../images/cigarette.png';
import oneBed from '../images/oneBed.png';
import twoBeds from '../images/twoBeds.png';

const BookAroom = () => {
  const dispatch = useDispatch();

  const getFromState = useSelector((state) => state);
  const { startDate, endDate } = getFromState.dates;
  const { reservationList } = getFromState;

  console.log(getFromState);

  const reservationForm = useRef();

  const [availableRoomsArr, setAvailableRoomsArr] = useState([]);
  const [message, setMessage] = useState('Please enter information for available hotel rooms');
  const [lock, setLock] = useState(true);

  console.log(availableRoomsArr);

  const getPageInfo = () => {
    let toggleSection = reservationForm.current.children[1];
    let smokingOption = toggleSection.children[0].children[0].children[0].style['background-color'];
    let allowSmoking = smokingOption === 'white' ? true : false;
    let bedOption = toggleSection.children[1].children[0].children[1].children[1].innerText;
    let bedChoice = bedOption.split(' ')[0] === 'One' ? 1 : 2;

    return {
      allowSmoking,
      bedChoice,
    };
  };

  const findAvailability = () => {
    let data = getPageInfo();
    let roomsAvailable = availableRooms(
      startDate,
      endDate,
      data.allowSmoking,
      data.bedChoice,
      reservationList
    );

    console.log(roomsAvailable);

    setAvailableRoomsArr(roomsAvailable);

    if (roomsAvailable.length === 0) {
      setMessage('No rooms are available that fit your qualifications');
    }
  };

  const processWebOrders = () => {
    let arr = [];
    // requests.requests.map((i) =>
    //   arr.push(
    //     availableRooms(i.checkin_date, i.checkout_date, i.is_smoker, i.min_beds, reservationList)
    //   )
    // );
    // console.log(arr);
    // let data = getPageInfo();
    // data.startDate = '1/1/2020';

    // let dateSection = reservationForm.current.children[0].children[0].children;
    // dateSection[0].children[0].children[1].value = '1/1/2020';
  };

  const reserveRoom = ({ target }) => {
    console.log('target', target.innerText);

    if (target.innerText.split(' ')[0] === 'Undo') {
      console.log('save');
      dispatch(
        saveReservation(
          {
            room_id: target.attributes.room_id.value,
            checkin_date: startDate,
            checkout_date: endDate,
            total_charge: target.parentElement.parentElement.children[4].innerText,
          },
          reservationList
        )
      );
    } else {
      dispatch(undoReservation());
    }
  };

  const numberOfDays = () => {
    let datesArr = [new Date(startDate), new Date(endDate)];
    let minDate = min(datesArr);
    let maxDate = max(datesArr);
    let daysDifference = differenceInDays(maxDate, minDate) + 1;

    return daysDifference;
  };

  return (
    <div ref={reservationForm}>
      <DateSlider />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2vh' }}>
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
          imageOne={twoBeds}
          labelOne={'Two Beds'}
          imageTwo={oneBed}
          labelTwo={'One Bed'}
          size={'10vmin'}
          name={'bedToggle'}
          className={'bedToggle'}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button
          onClick={findAvailability}
          text={'Find available rooms'}
          className={'findRoomBtn'}
        />
        <Button text={'Process web orders'} className={'webOrdersBtn'} onClick={processWebOrders} />
      </div>
      {availableRoomsArr.length === 0 ? (
        <div style={{ textAlign: 'center', fontSize: '3vmin', fontWeight: '600' }}>{message}</div>
      ) : (
        <TableData
          array={availableRoomsArr}
          numberOfDays={numberOfDays()}
          reserveRoom={reserveRoom}
        />
      )}
    </div>
  );
};

export default BookAroom;
