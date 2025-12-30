"use client";
import React, { StrictMode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "@/components/ui/toaster";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.RECAPTCHA_SITE_KEY!}
        scriptProps={{ async: true, defer: true }}
      >
        {children}
        <Toaster />
      </GoogleReCaptchaProvider>
    </StrictMode>
  );
}
