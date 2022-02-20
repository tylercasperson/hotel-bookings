import { START_DATE_SAVE_SUCCESS, END_DATE_SAVE_SUCCESS } from '../constants/settingsConstants.js';

export const saveStartDate = (date) => (dispatch) => {
  dispatch({
    type: START_DATE_SAVE_SUCCESS,
    payload: date,
  });

  localStorage.setItem('startDate', JSON.stringify(date));
};

export const saveEndDate = (date) => (dispatch) => {
  dispatch({
    type: END_DATE_SAVE_SUCCESS,
    payload: date,
  });

  localStorage.setItem('endDate', JSON.stringify(date));
};
