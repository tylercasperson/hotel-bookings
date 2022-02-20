import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { settingsReducer } from './components/data/reducers/settingsReducers.js';

const reducer = combineReducers({
  dates: settingsReducer,
});

const startDateFromStorage = localStorage.getItem('startDate')
  ? JSON.parse(localStorage.getItem('startDate'))
  : '1/1/2020';

const endDateFromStorage = localStorage.getItem('endDate')
  ? JSON.parse(localStorage.getItem('endDate'))
  : '12/31/2020';

const initialState = {
  dates: { startDate: startDateFromStorage, endDate: endDateFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
