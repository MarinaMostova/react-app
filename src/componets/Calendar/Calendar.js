import { uk } from "date-fns/locale";
import { getCurrentDate } from "../../helpers/getCurrentDate";
import { Container, Icon, StyledDatePicker } from "./Calendar.styled";
import img from "../../images/calendar.svg";

export const Calendar = ({ getDate, selectedDate }) => {
  const handleDateChange = async (date) => {
    await getDate(date);
  };

  const maxDate = getCurrentDate(new Date());

  return (
    <>
      <Container>
        <StyledDatePicker
          startDate={new Date(2022, 1, 24)}
          endDate={new Date()}
          dateFormat="yyyy-MM-dd"
          minDate={new Date(2022, 1, 25)}
          maxDate={maxDate}
          placeholderText="оберіть дату"
          value={selectedDate}
          onChange={handleDateChange}
          locale={uk}
        />
        <Icon src={img} />
      </Container>
    </>
  );
};
