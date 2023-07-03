import { Container, Icon, StyledDatePicker } from "./Calendar.styled";
import img from "../../images/down.svg";

import { uk } from "date-fns/locale";

export const Calendar = ({ getDate, selectedDate }) => {
  const handleDateChange = async (date) => {
    await getDate(date);
  };

  return (
    <>
      <Container>
        <StyledDatePicker
          startDate={new Date(2022, 1, 24)}
          endDate={new Date()}
          dateFormat="yyyy-MM-dd"
          minDate={new Date(2022, 1, 25)}
          maxDate={new Date()}
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
