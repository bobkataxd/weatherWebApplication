"use client";
import { useEffect, useState } from "react";
import Layout from "./weatherComponents/Layout";
import CurrentWeather from "./weatherComponents/CurrentWeather";
import Forecast from "./weatherComponents/Forecast";
import { fetchWeather } from "./utils/api";
import { TabView, TabPanel } from 'primereact/tabview';

// Define the type for location
interface Location {
  latitude: number;
  longitude: number;
}

export default function Home() {
  const [location, setLocation] = useState<Location | null>(null); // Add type for location
  const [weather, setWeather] = useState(null);
  const [forecast3Days, setForecast3Days] = useState(null);
  const [forecast7Days, setForecast7Days] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
  
          try {
            // Fetch today's weather
            const today = await fetchWeather(latitude, longitude, "today");
            console.log("Today's Weather Data:", today);
            setWeather(today);
  
            // Fetch 3-day forecast
            const threeDays = await fetchWeather(latitude, longitude, "3-days");
            console.log("3-Day Forecast Data:", threeDays);
            setForecast3Days(threeDays);
  
            // Fetch 7-day forecast
            const sevenDays = await fetchWeather(latitude, longitude, "7-days");
            console.log("7-Day Forecast Data:", sevenDays);
            setForecast7Days(sevenDays);
          } catch (error) {
            console.error("Failed to fetch weather data:", error);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by your browser.");
    }
  }, []);
  

  return (
    <Layout>
      <div>
        <TabView>
          <TabPanel header="Today">
            <CurrentWeather weather={weather} />
          </TabPanel>
          <TabPanel header="3-Day Forecast">
            <Forecast forecast={forecast3Days} title="3-Day Forecast" />
          </TabPanel>
          <TabPanel header="7-Day Forecast">
            <Forecast forecast={forecast7Days} title="7-Day Forecast" />
          </TabPanel>
        </TabView>
        {location && (
          <p>
            Current Location: Latitude {location.latitude}, Longitude{" "}
            {location.longitude}
          </p>
        )}
      </div>
    </Layout>
  );
}


