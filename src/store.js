import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { format, add } from 'date-fns';

import { dateFormat } from './components/data/formulas/dateFormulas';
import rooms from './components/data/initialData/rooms.json';
import reservations from './components/data/initialData/reservations.json';

import { datesReducer } from './components/data/reducers/settingsReducers.js';
import {
  reservationListReducer,
  reservationSaveReducer,
  reservationUndoReducer,
} from './components/data/reducers/reservationReducers.js';

const reducer = combineReducers({
  dates: datesReducer,
  reservationList: reservationListReducer,
  reservationSave: reservationSaveReducer,
  reservationUndo: reservationUndoReducer,
});

const gatherDates = () => {
  let dateArr = [];

  reservations.reservations.map((i) => {
    return dateArr.push(dateFormat(i.checkin_date), dateFormat(i.checkout_date));
  });

  dateArr.push(format(add(Date.now(), { days: 90 }), 'M/d/yyyy'));
  dateArr.sort((a, b) => new Date(a) - new Date(b));

  let minDate = dateArr[0];
  let maxDate = dateArr[dateArr.length - 1];

  return { minDate, maxDate };
};

let reservationListFromData = localStorage.getItem('reservationList')
  ? JSON.parse(localStorage.getItem('reservationList'))
  : rooms.rooms
      .map((i) => ({
        ...i,
        ...reservations.reservations.find((j) => j.room_id === i.id),
      }))
      .filter((k) => k.checkin_date !== undefined);

const startDateFromStorage = localStorage.getItem('startDate')
  ? JSON.parse(localStorage.getItem('startDate'))
  : format(Date.now(), 'M/d/yyyy');

const endDateFromStorage = localStorage.getItem('endDate')
  ? JSON.parse(localStorage.getItem('endDate'))
  : format(add(Date.now(), { days: 7 }), 'M/d/yyyy');

const minDateFromData = gatherDates().minDate;
const maxDateFromData = gatherDates().maxDate;

const initialState = {
  dates: {
    startDate: startDateFromStorage,
    endDate: endDateFromStorage,
    minDate: minDateFromData,
    maxDate: maxDateFromData,
  },
  reservationList: reservationListFromData,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
