import { useEffect, useState } from "react";

import "./App.css";

import { DatePicker } from "./componets/DatePicker/DatePicker";
import { StatisticalList } from "./componets/StattisticalList/StattisticalList";
import { formatDate } from "./helpers/formatDate";
import { getDateStatistic, getTerms } from "./services/statistical-api";

const currentDate = formatDate(new Date());

function App() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [terms, setTerms] = useState({});
  const [statistic, setStatistic] = useState({});

  useEffect(() => {
    getAllTerms("ua");
    getStatictic(selectedDate);
  }, [selectedDate]);

  const getStatictic = async (date) => {
    try {
      const data = await getDateStatistic(date);
      setStatistic(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTerms = async (lang) => {
    try {
      const data = await getTerms(lang);
      setTerms(data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(terms);
  console.log(statistic.stats);

  const getDate = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  return (
    <>
      <DatePicker getDate={getDate} />
      <p>Date :{selectedDate}</p>
      <StatisticalList terms={terms} statistic={statistic.stats} />
    </>
  );
}

export default App;
