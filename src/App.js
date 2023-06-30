import { useState } from "react";
import "./App.css";
import { DatePicker } from "./componets/DatePicker/DatePicker";
import { dateFormatting } from "./helpers/formatDate";

const currentDate = dateFormatting(new Date());

function App() {
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const getDate = (date) => {
    // const formattedDate = dateFormatting(date);
    setSelectedDate(date);
  };

  return (
    <>
      <DatePicker getDate={getDate} />;<p>Date :{selectedDate}</p>
    </>
  );
}

export default App;
