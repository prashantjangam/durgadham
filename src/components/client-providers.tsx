"use client";
import React, { StrictMode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "@/components/ui/toaster";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LdOATssAAAAAHSThqXSBPylj_ndQroElZKmBMty"}
        scriptProps={{ async: true, defer: true }}
      >
        {children}
        <Toaster />
      </GoogleReCaptchaProvider>
    </StrictMode>
  );
}
