const axios = require("axios");

const fetchData = async () => {
  const apiUrl = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
  try {
    const response = await axios.get(apiUrl);
    return response.data; 
  } catch (error) {
    console.error("Error data Fetching:", error.message);
    throw new Error("Failed to fetch data from API.");
  }
};

module.exports = fetchData;