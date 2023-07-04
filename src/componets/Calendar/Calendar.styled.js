import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const StyledDatePicker = styled(DatePicker)`
  position: relative;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  width: 210px;
  font-family: "Signika Negative", sans-serif;
  font-size: 32px;
  background-color: rgb(210, 212, 207);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  pointer-events: none;
`;
