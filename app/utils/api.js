const API_KEY = "ba45abd449b5c909b975b86f5e495ebc"; //checked

export const fetchWeather = async (latitude, longitude, type) => {
  let url;

  switch (type) {
    case "today":
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
      break;
    case "3-days":
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}&cnt=3`;
      break;
    case "7-days":
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}&cnt=7`;
      break;
    default:
      throw new Error("Invalid forecast type");
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`${type} data fetched:`, data); // Add debug logs here
    return data;
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    return null;
  }
};