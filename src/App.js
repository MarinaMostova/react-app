import { useEffect, useState } from "react";

import { formatDate, getCurrentDate } from "./helpers";
import { getDateStatistic, getTerms } from "./services/statistical-api";

import { Calendar } from "./componets/Calendar/Calendar";
import { StatisticalList } from "./componets/StatisticalList/StatisticalList";
import { PageContainer } from "./componets/PageContainer/PageContainer";
import { Header } from "./componets/Header/Header";
import { Footer } from "./componets/Footer/Footer";

const date = getCurrentDate(new Date());

const currentDate = formatDate(date);

function App() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [terms, setTerms] = useState({});
  const [statistic, setStatistic] = useState({});

  useEffect(() => {
    getAllTerms("ua");
    getStatistic(selectedDate);
  }, [selectedDate]);

  const getStatistic = async (date) => {
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

  const getDate = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  return (
    <PageContainer>
      <Header day={statistic.day}>
        <Calendar
          getDate={getDate}
          selectedDate={selectedDate}
          maxDate={currentDate}
        />
      </Header>
      <StatisticalList
        terms={terms}
        statistic={statistic.stats}
        increase={statistic.increase}
      />
      <Footer />
    </PageContainer>
  );
}

export default App;
