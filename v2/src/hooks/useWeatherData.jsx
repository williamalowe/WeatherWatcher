import { useState, useEffect } from "react";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d1849d428c134446b4a30306242301&q&q=melbourne&days=7&aqi=no&alerts=no`, {mode: "cors"})
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setWeatherData(response))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false)
      })
  }, []);
  
  return { weatherData, error, loading }
};

export default useWeatherData;