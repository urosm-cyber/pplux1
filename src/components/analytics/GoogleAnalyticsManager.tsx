"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsManager({ gaId }: { gaId: string }) {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "accepted") {
        setConsentGranted(true);
      } else {
        setConsentGranted(false);
      }
    };

    checkConsent();

    // Listen for updates
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener("cookie-consent-updated", handleConsentUpdate);

    return () => {
      window.removeEventListener("cookie-consent-updated", handleConsentUpdate);
    };
  }, []);

  if (!consentGranted) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
