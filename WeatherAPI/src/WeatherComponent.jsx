import axios from "axios"; // import axios to make requests of APIs

import { Separator } from "@/components/ui/separator";
// import { Cloudy } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// the Translation hook
import { useTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";
import {} from "../features/weather/weatherSlice";

//async redux
import { fetchWeather } from "../features/weather/weatherSlice";

export default function WeatherComponent() {
  const dispatch = useDispatch();

  const fetchLoad = useSelector((state) => {
    console.log("..........", state.weather.isLoading);
    return state.weather.isLoading;
  });
  const weatherDataRedux = useSelector((state) => {
    console.log("weatherDataRedux", state.weather.weatherState);
    return state.weather.weatherState;
  });

  const [currentLanguage, setcurrentLanguage] = useState("en");

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // console.log(i18n.language);
    setcurrentLanguage(currentLanguage === "en" ? "ar" : "en");
  };

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <>
      <div
        className=" h-1/2 bg-blue-800 rounded p-4 drop-shadow-2xl "
        dir={currentLanguage === "ar" ? "ltr" : "rtl"}
      >
        <div className="flex max-w-sm flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1.5">
            <div className="leading-none font-medium text-white">
              {/* {weatherData.location?.name} */}
              {t("city")}
            </div>
            <div className="text-muted-foreground">
              {new Date(
                weatherDataRedux.location?.localtime,
              ).toLocaleDateString(i18n.language === "ar" ? "ar-EG" : "en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
          <Separator />
          {fetchLoad ? <Spinner className="size-8" /> : ""}
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                {fetchLoad ? <Spinner className="size-8" /> : ""}

                <h1
                  className="text-5xl text-white whitespace-nowrap "
                  dir="rtl"
                >
                  {Math.round(weatherDataRedux.current?.temp_c)}°C
                </h1>
                <img
                  src={weatherDataRedux?.current?.condition?.icon}
                  alt="condition"
                />
              </div>
              <p>{weatherDataRedux?.current?.condition?.text}</p>{" "}
              {/* <div className="flex  gap-1.5">
                <span>الصغرى 29</span>
                <Separator orientation="vertical" />
                <span>الكبرى 38</span>
              </div> */}
            </div>
            <div className="flex items-start justify-end">
              <img
                className="w-1/2 "
                src="../public/cloud.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm flex justify-start mt-2">
        <Button
          variant="outline"
          onClick={() => {
            changeLanguage(currentLanguage);
          }}
        >
          {currentLanguage === "en" ? "English" : "عربي"}
        </Button>
        {/* <Button variant="outline" onClick={() => changeLanguage("ar")}>
          ar
        </Button> */}
      </div>
    </>
  );
}
