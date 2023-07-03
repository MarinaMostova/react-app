import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const StyledDatePicker = styled(DatePicker)`
  font-family: "Signika Negative", sans-serif;
  font-size: 32px;
  border-radius: 10px;
  padding: 10px 15px;
  width: 210px;
  background-color: rgb(200, 214, 184, 0.8);
  cursor: pointer;
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;

`;

export const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 20px;
`;
