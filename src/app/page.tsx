import React from "react";

const Home: React.FC = () => {
  return (
    <>
      {/* Meta Tags */}
      <div style={{ display: "none" }}>
        <meta property="og:title" content="Amazing Image Preview" />
        <meta property="og:description" content="Check out this amazing image!" />
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
      </div>

      {/* Page Content */}
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          lineHeight: "1.6",
        }}
      >
        {/* Header */}
        <header
          style={{
            padding: "1rem",
            backgroundColor: "#282c34",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1>Welcome to My Page</h1>
        </header>

        {/* Content */}
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <p>
            This is a simple one-page design created with React and TypeScript.
          </p>
          <div style={{ marginBottom: "10px" }}></div>
          <img
            src="https://fastly.picsum.photos/id/0/800/600.jpg?hmac=qRIxZPb6D3nnquI4AQ4xTVwhTvVx1FL3Pdm29Jz61fQ"
            alt="Sample 1"
          />
          <div style={{ marginBottom: "10px" }}></div>
          <img src="https://picsum.photos/200" alt="Sample 2" />
          <div style={{ marginBottom: "10px" }}></div>
          <p style={{ textAlign: "center", color: "white" }}>
            This website is created for the sole purpose of testing the link
            sharing service.
          </p>
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: "1rem",
            backgroundColor: "#282c34",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <p>© 2024 My Simple Page</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
