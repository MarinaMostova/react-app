import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Container = styled.div`
  padding: 15px;
  border: 1px solid red;
`;

export const StyledCalendar = styled(Calendar)`
  border-radius: 15px;
  overflow: hidden;
  // background-color: black;
  // color: #fff;

  .react-calendar__tile {
    font-size: 16px;
  }

  .react-calendar__navigation__label {
    font-size: 16px;
    font-weight: 700;
  }

  .react-calendar__navigation__arrow {
    font-size: 28px;
    color: blue;
  }
`;
