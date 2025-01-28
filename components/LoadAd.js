/*"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Adsense() {
  const router = useRouter();

  useEffect(() => {
    // Load the script when the page mounts
    let script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Load the script when the route changes
    const handleRouteChange = () => {
      // Load the same script
      script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
  }, []);

  return (
    <>
      <head>
        <script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
          crossOrigin="anonymous"
        ></script>
      </head>
    </>
  );
}

/*import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleAdPcItem() {
  const router = useRouter();

  useEffect(() => {
    const loadAd = () => {
      // Execute the script with the beforeInteractive strategy and the onLoad callback
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
        crossorigin="anonymous"
        onLoad={() => {
          // Execute the loadAd function after the script is loaded
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }}
      />;
    };

    // Execute the loadAd function if router.query is truthy
    if (router.query) {
      loadAd();
    }
  }, [router.query]);

  return <>{/* No need to repeat the script tag here */
