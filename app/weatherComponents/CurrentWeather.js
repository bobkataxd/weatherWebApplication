"use client";

import { Card } from "primereact/card";

const CurrentWeather = ({ weather }) => {
  if (null == weather) {
    return (
      <Card title="Today's Weather" style={{ marginBottom: "1rem" }}>
        <p>Weather data is not available yet</p>
      </Card>
    );
  }

  return (
    <Card title="Today's Weather" style={{ marginBottom: "1rem" }}>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Cloudiness: {weather.clouds.all}%</p>
    </Card>
  );
};

export default CurrentWeather;
