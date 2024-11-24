import React from "react";

const Home: React.FC = () => {
  return (
    <>
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
        <img src="https://fastly.picsum.photos/id/119/200/300.jpg?hmac=1NqHBHR5JDtc_FgBO6wYZJYAWBRIPfgNbRoiqVQ5m-k"></img>
        <div style={{ marginBottom: "10px" }}></div>
        <img src = "https://picsum.photos/200"></img>
        <div style={{marginBottom: '10px'}}></div>
        <p style={{textAlign: 'center', color:'white'}}>This website is created for sole purpose of testing the link sharing service.</p>
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
