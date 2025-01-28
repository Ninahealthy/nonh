import React, { useEffect } from "react";
import Script from "next/script";
export default function Rightbar() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <leftbar>
      <text>Advertisement</text>
      <br></br>
      <br></br>
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
        crossorigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: 300, height: 250 }}
        data-ad-client="ca-pub-2087636695455778"
        data-ad-slot="4949230260"
      ></ins>
    </leftbar>
  );
}
