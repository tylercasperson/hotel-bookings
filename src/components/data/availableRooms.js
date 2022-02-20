import { dateFormat } from './dateFormulas';
import rooms from './rooms.json';
import reservations from './reservations.json';

export const availableRooms = (startDate, endDate, allowSmoking, numberOfBeds) => {
  let bedsPerRoom = numberOfBeds === 1 ? rooms.rooms : rooms.rooms.filter((i) => i.num_beds === 2);
  let andSmokingChoice = bedsPerRoom
    .filter((i) => i.allow_smoking === allowSmoking)
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

  return andSmokingChoice;
};
