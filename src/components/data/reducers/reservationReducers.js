import {
  RESERVATIONS_LIST_SUCCESS,
  RESERVATIONS_SAVE_SUCCESS,
  RESERVATIONS_UNDO_SUCCESS,
} from '../constants/reservationConstants.js';

export const reservationListReducer = (state = { reservationList: [] }, action) => {
  switch (action.type) {
    case RESERVATIONS_LIST_SUCCESS:
      return {
        ...state,
        reservationList: action.payload,
      };
    default:
      return state;
  }
};

export const reservationSaveReducer = (state = { reservationList: [] }, action) => {
  switch (action.type) {
    case RESERVATIONS_SAVE_SUCCESS:
      return {
        ...state,
        reservationList: action.payload,
      };
    default:
      return state;
  }
};

export const reservationUndoReducer = (state = { reservationList: [] }, action) => {
  switch (action.type) {
    case RESERVATIONS_UNDO_SUCCESS:
      return {
        ...state,
        reservationList: action.payload,
      };
    default:
      return state;
  }
};
