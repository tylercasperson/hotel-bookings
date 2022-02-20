import { dateFormat } from '../formulas/dateFormulas';
import rooms from '../initialData/rooms.json';

export const availableRooms = (startDate, endDate, allowSmoking, numberOfBeds, array) => {
  let bedsPerRoom = numberOfBeds === 1 ? rooms.rooms : rooms.rooms.filter((i) => i.num_beds === 2);
  let andSmokingChoice = bedsPerRoom
    .filter((i) => i.allow_smoking === allowSmoking)
    .sort((a, b) => a.daily_rate - b.daily_rate);

  let reserveredRoomsDates = array.filter(
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
