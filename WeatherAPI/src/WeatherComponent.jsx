import axios from "axios"; // import axios to make requests of APIs

import { Separator } from "@/components/ui/separator";
import { Cloudy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export default function WeatherComponent() {
  // const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [weatherData2, setWeatherData2] = useState({});

  useEffect(() => {
    console.log("start");
    const controller = new AbortController();

    axios
      .get("https://api.weatherapi.com/v1/current.json", {
        signal: controller.signal,
        params: {
          key: "0657aad631fe494e8f7153133261405",
          q: "Cairo",
          aqi: "no",
        },
      })
      .then((response) => {
        console.log(response.data);
        // console.log();

        setWeatherData(response.data.location);
        setWeatherData2(response.data.current);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });

    return () => {
      console.log("cancel");
      controller.abort();
    };
  }, []);
  const [currentLanguage, setcurrentLanguage] = useState("ar");
  // اختار اللغة هنا
  function changeLanguage() {
    // currentLanguage === "en" ? "ar" : "en";
    setcurrentLanguage(currentLanguage === "en" ? "ar" : "en");
  }

  return (
    <>
      <div
        className="w-1/3 h-1/2 bg-blue-800 rounded p-4 drop-shadow-2xl "
        dir="rtl"
      >
        <div className="flex max-w-sm flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1.5">
            <div className="leading-none font-medium">{weatherData.name}</div>
            <div className="text-muted-foreground">{weatherData.localtime}</div>
          </div>
          <Separator />

          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                <h1 className="text-5xl  text-white">
                  {weatherData2.temp_c} c
                </h1>
                <img src={weatherData2.condition?.icon} alt="condition" />
              </div>
              <p>{weatherData2.condition?.text}</p>{" "}
              <div className="flex  gap-1.5">
                <span>الصغرى 29</span>
                <Separator orientation="vertical" />
                <span>الكبرى 38</span>
              </div>
            </div>
            <div>
              <Cloudy className="  text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm flex justify-start mt-2">
        <Button variant="outline" onClick={changeLanguage}>
          {currentLanguage === "ar" ? "English" : "Arabic"}
        </Button>
      </div>
    </>
  );
}
