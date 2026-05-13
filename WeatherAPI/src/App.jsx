"use client";

import * as React from "react";
import { useState } from "react";
import "./App.css";
import LoginComponent from "./LoginComponent";
import WeatherComponent from "./WeatherComponent";
function App() {
  return (
    <>
      {/* <LoginComponent /> */}
      <div className="min-h-screen w-full bg-blue-600 flex flex-col gap-1.5 justify-center items-center p-4">
        <WeatherComponent />
      </div>
    </>
  );
}

export default App;
