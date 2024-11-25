import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossOrigin="anonymous"
        />
        <script id="large-data-script">
          {`
            console.log("This is a large inline script for testing purposes.");

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);

            const largeData = "A".repeat(5); // Generating 50 KB of data
            console.log("Large script data generated:", largeData);
          `}
        </script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossOrigin="anonymous"
        ></Script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://tags.crwdcntrl.net" />
        <link rel="preconnect" href="https://bcp.crwdcntrl.net" />
        <link rel="preconnect" href="https://c.ltmsphrcl.net" />
        <link rel="dns-prefetch" href="https://tags.crwdcntrl.net" />
        <link rel="dns-prefetch" href="https://bcp.crwdcntrl.net" />
        <link rel="dns-prefetch" href="https://c.ltmsphrcl.net" />
        <meta property="og:title" content="Amazing Image Preview" />
        <meta
          property="og:description"
          content="Check out this amazing image!"
        />
        <meta
          property="og:image"
          content="https://fastly.picsum.photos/id/0/800/600.jpg?hmac=qRIxZPb6D3nnquI4AQ4xTVwhTvVx1FL3Pdm29Jz61fQ"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amazing Image Preview" />
        <meta
          name="twitter:description"
          content="Check out this amazing image!"
        />
        <meta
          name="twitter:image"
          content="https://fastly.picsum.photos/id/119/200/300.jpg?hmac=1NqHBHR5JDtc_FgBO6wYZJYAWBRIPfgNbRoiqVQ5m-k"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
