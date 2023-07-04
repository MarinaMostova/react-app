export const getCurrentDate = (date) => {
  if (date.getHours() < 10) {
    date.setDate(date.getDate() - 1);
  }
  return date;
};
