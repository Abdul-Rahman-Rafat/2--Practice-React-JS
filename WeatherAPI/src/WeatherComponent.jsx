import { Separator } from "@/components/ui/separator";
import { Cloudy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WeatherComponent() {
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
            <div className="leading-none font-medium">القاهرة</div>
            <div className="text-muted-foreground">15 مايو 2026</div>
          </div>
          <Separator />

          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                <h1 className="text-5xl  text-white">38 c</h1>
                <Cloudy className="  text-white" />
              </div>
              <p>broken cloud</p>
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
