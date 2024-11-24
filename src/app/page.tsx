import React from "react";
import RootLayout from "./layout";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* Meta Tags */}
      <div style={{ display: "none" }}>
       
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
    </RootLayout>
  );
};

export default Home;
