import { useEffect, useState } from "react";

import "./App.css";

import { DatePicker } from "./componets/DatePicker/DatePicker";
import { StatisticalList } from "./componets/StattisticalList/StattisticalList";
import { formatDate } from "./helpers/formatDate";
import { getDateStatistic } from "./services/statistical-api";

const currentDate = formatDate(new Date());

function App() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  useEffect(() => {
    getStatictic(selectedDate);
  }, [selectedDate]);

  const getStatictic = async (date) => {
    try {
      const data = await getDateStatistic(date);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDate = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  return (
    <>
      <DatePicker getDate={getDate} />
      <p>Date :{selectedDate}</p>
      <StatisticalList />
    </>
  );
}

export default App;
