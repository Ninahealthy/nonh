"use client";

import { useEffect, useState } from "react";

export default function Consent() {
  const [consent, setConsent] = useState(false);

  const handleConsent = () => {
    document.cookie = "consent=true; max-age=2592000; path=/"; // Set cookie to expire in 30 days
    setConsent(true);
  };

  useEffect(() => {
    const consentCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("consent="));
    if (consentCookie) {
      const consentValue = consentCookie.split("=")[1];
      if (consentValue === "true") {
        setConsent(true);
      }
    }
  }, []);

  return (
    <consent>
      {consent ? (
        <></>
      ) : (
        <button className="button-consent" onClick={handleConsent}>
          Ce site utilise des cookies pour améliorer votre expérience
          utilisateur et fournir du contenu personnalisé.
          <strong>
            <em> J'accepte</em>
          </strong>
        </button>
      )}
    </consent>
  );
}
