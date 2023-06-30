import axios from "axios";

axios.defaults.baseURL = "https://russianwarship.rip/api/v1";

export const getDateStatistic = async (date) => {
  const response = await axios.get(`/statistics/${date}`);
  const { data } = response.data;
  return data;
  // console.log(response.data.data);
};
