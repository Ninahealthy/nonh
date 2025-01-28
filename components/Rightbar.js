import React, { useEffect } from "react";
import Script from "next/script";
export default function Rightbar() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <rightbar>
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
        style={{ display: "block" }}
        data-ad-client="ca-pub-2087636695455778"
        data-ad-slot="2549748890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </rightbar>
  );
}
