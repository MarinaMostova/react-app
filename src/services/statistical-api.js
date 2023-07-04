import axios from "axios";

axios.defaults.baseURL = "https://russianwarship.rip/api/v2";

export const getDateStatistic = async (date) => {
  const response = await axios.get(`/statistics/${date}`);
  const { data } = response.data;
  return data;
};

export const getTerms = async (lang) => {
  const response = await axios.get(`/terms/${lang}`);
  const { data } = response.data;
  return data;
};
