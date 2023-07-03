import { format } from "date-fns";

// export const formatDate = (date) => {
//   const now = new Date();
//   const dateIsToday =
//     date.getDate() === now.getDate() &&
//     date.getMonth() === now.getMonth &&
//     date.getFullYea() === now.getFullYear();

//   const isBefore10AM = date.getHours() < 10;

//   if (dateIsToday && isBefore10AM) {
//     date.setDate(date.getDate() - 1);
//   }

//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// };

export const formatDate = (date) => {
  const now = new Date();
  const dateIsToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth &&
    date.getFullYea() === now.getFullYear();

  const isBefore10AM = date.getHours() < 10;

  if (dateIsToday && isBefore10AM) {
    date.setDate(date.getDate() - 1);
  }

  const formattedDate = format(date, "yyyy-MM-dd");

  return formattedDate;
};
