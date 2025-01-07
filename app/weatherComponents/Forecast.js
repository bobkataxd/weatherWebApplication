"use client";

import { Card } from "primereact/card";

const Forecast = ({ forecast, title }) => {
  if (null == forecast || null == forecast.list) {
    return (
      <Card title={title} style={{ marginBottom: "1rem" }}>
        <p>Forecast data is not available yet</p>
      </Card>
    );
  }

  return (
    <Card title={title} style={{ marginBottom: "1rem" }}>
      <ul>
        {forecast.list.map((entry, index) => {
          const date = new Date(entry.dt * 1000).toLocaleDateString();
          const temp = entry.main?.temp || entry.temp?.day;
          const description = entry.weather[0]?.description || "No description";

          return (
            <li key={index}>
              {date}: {temp}°C, {description}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Forecast;
