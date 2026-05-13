"use client";

import * as React from "react";
import { useState } from "react";
import "./App.css";

import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

const translations = {
  en: {
    dir: "ltr",
    values: {
      title: "Login to your account",
      description: "Enter your email below to login to your account",
      signUp: "Sign Up",
      email: "Email",
      emailPlaceholder: "m@example.com",
      password: "Password",
      forgotPassword: "Forgot your password?",
      login: "Login",
      loginWithGoogle: "Login with Google",
    },
  },

  ar: {
    dir: "rtl",
    values: {
      title: "تسجيل الدخول إلى حسابك",
      description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
      signUp: "إنشاء حساب",
      email: "البريد الإلكتروني",
      emailPlaceholder: "m@example.com",
      password: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      login: "تسجيل الدخول",
      loginWithGoogle: "تسجيل الدخول باستخدام Google",
    },
  },
};

// const currentLanguage = "en";

function LoginComponent() {
  const [currentLanguage, setcurrentLanguage] = useState("ar");
  // اختار اللغة هنا
  function changeLanguage() {
    // currentLanguage === "en" ? "ar" : "en";
    setcurrentLanguage(currentLanguage === "en" ? "ar" : "en");
  }

  const t = translations[currentLanguage].values;
  const dir = translations[currentLanguage].dir;

  return (
    <div className="min-h-screen w-full bg-blue-600 flex flex-col gap-1.5 justify-center items-center p-4">
      <Card className="w-full max-w-sm" dir={dir}>
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>

          <CardDescription>{t.description}</CardDescription>

          <CardAction>
            <Button variant="link">{t.signUp}</Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t.email}</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t.password}</Label>

                  <a
                    href="#"
                    className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {t.forgotPassword}
                  </a>
                </div>

                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            {t.login}
          </Button>

          <Button variant="outline" className="w-full">
            {t.loginWithGoogle}
          </Button>
        </CardFooter>
      </Card>
      <div className="w-full max-w-sm flex justify-start mt-2">
        <Button variant="outline" onClick={changeLanguage}>
          {currentLanguage === "ar" ? "English" : "Arabic"}
        </Button>
      </div>
    </div>
  );
}

export default LoginComponent;
