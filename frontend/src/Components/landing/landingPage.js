import React from "react";

function Landing() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "50px" }}>
        Walchand College of Engineering
      </h1>
      <div style={{display:"flex",alignContent:"center",justifyContent:"center", padding: "5px" }}>
        <button
          style={{
            margin: "7px",
            backgroundColor: "#d9ac1a",
            color: "white",
            borderRadius: "5px",
          }}
        >
        <a href="/studentLogin">Student login</a>
        </button>
        <button
          style={{
            margin: "7px",
            backgroundColor: "#d9ac1a",
            color: "white",
            borderRadius: "5px",
          }}
        >
        <a href="/facultyLogin">Faculty Login</a>
        </button>
      </div>
    </div>
  );
}

export default Landing;
