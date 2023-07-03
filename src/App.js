import { useEffect, useState } from "react";

import "./App.css";

// import { DatePicker } from "./componets/DatePicker/DatePicker";
import { Calendar } from "./componets/Calendar/Calendar";
import { StatisticalList } from "./componets/StattisticalList/StattisticalList";
import { PageContainer } from "./componets/PageContainer/PageContainer";
import { Header } from "./componets/Header/Header";

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
  // // console.log(terms);
  // console.log(statistic);

  const getDate = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  return (
    <>
      <PageContainer>
        <Header date={selectedDate}>
          <Calendar getDate={getDate} selectedDate={selectedDate} />
        </Header>
        <StatisticalList terms={terms} statistic={statistic.stats} />
      </PageContainer>
    </>
  );
}

export default App;
