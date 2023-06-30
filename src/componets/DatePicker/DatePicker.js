import { Container } from "./DatePicker.styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const DatePicker = ({ getDate }) => {
  const handleDateChange = (date) => {
    getDate(date);
  };

  return (
    <Container>
      <Calendar
        onChange={handleDateChange}
        locale="uk"
        minDate={new Date(2022, 1, 24)}
        maxDate={new Date()}
      />
    </Container>
  );
};
