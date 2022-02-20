import {
  RESERVATIONS_LIST_SUCCESS,
  RESERVATIONS_SAVE_SUCCESS,
  RESERVATIONS_UNDO_SUCCESS,
} from '../constants/reservationConstants.js';

export const listReservations = (array) => async (dispatch) => {
  let listOfReservations = localStorage.getItem('reservationList')
    ? JSON.parse(localStorage.getItem('reservationList'))
    : array;

  dispatch({
    type: RESERVATIONS_LIST_SUCCESS,
    payload: listOfReservations,
  });
};

export const saveReservation = (reservation, array) => async (dispatch) => {
  let listOfReservations = localStorage.getItem('reservationList')
    ? JSON.parse(localStorage.getItem('reservationList'))
    : array;
  listOfReservations.push(reservation);
  localStorage.setItem('reservationList', JSON.stringify(listOfReservations));

  dispatch({
    type: RESERVATIONS_SAVE_SUCCESS,
    payload: listOfReservations,
  });

  console.log('saveRes', listOfReservations);
};

export const undoReservation = () => async (dispatch) => {
  let listOfReservations = JSON.parse(localStorage.getItem('reservationList'));
  listOfReservations.pop();
  localStorage.setItem('reservationList', JSON.stringify(listOfReservations));

  dispatch({
    type: RESERVATIONS_UNDO_SUCCESS,
    payload: listOfReservations,
  });
};
