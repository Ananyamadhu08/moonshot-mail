export function formatDate(date) {
  const moment = require("moment");
  const newDate = moment(date);
  const formattedDate = newDate.format("DD/MM/YYYY");
  const formattedTime = newDate.format("h:mm a");

  const newFormattedDate = formattedDate + " " + formattedTime;

  return newFormattedDate;
}
