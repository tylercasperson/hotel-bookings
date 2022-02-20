import { START_DATE_SAVE_SUCCESS, END_DATE_SAVE_SUCCESS } from '../constants/settingsConstants.js';

export const datesReducer = (state = { dates: [] }, action) => {
  switch (action.type) {
    case START_DATE_SAVE_SUCCESS:
      return {
        ...state,
        startDate: action.payload,
      };
    case END_DATE_SAVE_SUCCESS:
      return {
        ...state,
        endDate: action.payload,
      };

    default:
      return state;
  }
};
