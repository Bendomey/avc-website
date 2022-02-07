import React from "react";
import Head from "next/head";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line @next/next/no-sync-scripts
export function HeadComponent() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>
          AVC — A modern legal solution for doing business in africa
        </title>
        <meta
          content="AVC — A modern legal solution for doind business in africa"
          property="og:title"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="/fonts/font/stylesheet.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/components.css" rel="stylesheet" type="text/css" />
        <link href="/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="/css/avc.css" rel="stylesheet" type="text/css" />
        <link href="/css/all.min.css" rel="stylesheet" type="text/css" />

        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu:300&display=swap"
          rel="stylesheet"
        />
        <link href="/images/avc.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/avc.png" rel="apple-touch-icon" />
      </Head>
      <script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        type="text/javascript"
      ></script>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js"
        type="text/javascript"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossOrigin="anonymous"
      ></script>
      {/* <script src="/js/counter.js" type="text/javascript"></script> */}
      <script src="/js/avc.js" type="text/javascript"></script>
    </>
  );
}
