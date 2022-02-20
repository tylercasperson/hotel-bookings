import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { format, add } from 'date-fns';

import { dateFormat } from './components/data/formulas/dateFormulas';
import requests from './components/data/initialData/requests.json';
import reservations from './components/data/initialData/reservations.json';

import { datesReducer } from './components/data/reducers/settingsReducers.js';

const reducer = combineReducers({
  dates: datesReducer,
});

const gatherDates = () => {
  let dateArr = [];

  reservations.reservations.map((i) => {
    return dateArr.push(dateFormat(i.checkin_date), dateFormat(i.checkout_date));
  });

  requests.requests.map((i) => {
    return dateArr.push(dateFormat(i.checkin_date), dateFormat(i.checkout_date));
  });

  dateArr.push(format(add(Date.now(), { days: 90 }), 'M/d/yyyy'));
  dateArr.sort((a, b) => new Date(a) - new Date(b));

  let minDate = dateArr[0];
  let maxDate = dateArr[dateArr.length - 1];

  return { minDate, maxDate };
};

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
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
