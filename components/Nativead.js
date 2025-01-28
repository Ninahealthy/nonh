import React, { useEffect } from "react";
import Script from "next/script";
export default function NativeAd() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <adunit>
        <nativead>
          <Script
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
            crossorigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-2087636695455778"
            data-ad-slot="7547473441"
          ></ins>
        </nativead>
      </adunit>
    </>
  );
}
