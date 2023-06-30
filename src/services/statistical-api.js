import axios from "axios";

axios.defaults.baseURL = "https://russianwarship.rip/api/v1";

export const getAllStatistic = async () => {
  const response = await axios.get("/statistics");
  console.log(response.data);
  return response.data
};
