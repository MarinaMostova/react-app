import { useEffect, useState } from "react";

import { formatDate, getCurrentDate } from "./helpers";
import { getDateStatistic, getTerms } from "./services/statistical-api";

import { Calendar } from "./componets/Calendar/Calendar";
import { StatisticalList } from "./componets/StatisticalList/StatisticalList";
import { PageContainer } from "./componets/PageContainer/PageContainer";
import { Header } from "./componets/Header/Header";
import { Footer } from "./componets/Footer/Footer";
import { Loader } from "./componets/Loader/Loader";
import { Error } from "./componets/Error/Error";

const date = getCurrentDate(new Date());

const currentDate = formatDate(date);

function App() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [terms, setTerms] = useState({});
  const [statistic, setStatistic] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllTerms("ua");
    getStatistic(selectedDate);
  }, [selectedDate]);

  const getStatistic = async (date) => {
    setIsLoading(true);
    try {
      const data = await getDateStatistic(date);
      setStatistic(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllTerms = async (lang) => {
    try {
      const data = await getTerms(lang);
      setTerms(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getDate = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };
  const { stats, increase, day } = statistic;

  const isStatisticLoaded = Object.keys(statistic).length > 0;
  const isTermsLoaded = Object.keys(terms).length > 0;

  console.log(statistic.increase);
  return (
    <PageContainer>
      <Header day={day}>
        <Calendar
          getDate={getDate}
          selectedDate={selectedDate}
          maxDate={currentDate}
        />
      </Header>
      {isLoading && <Loader />}
      {isTermsLoaded && isStatisticLoaded && (
        <StatisticalList terms={terms} statistic={stats} increase={increase} />
      )}
      {error && <Error />}
      {!error && <Footer />}
    </PageContainer>
  );
}

export default App;
