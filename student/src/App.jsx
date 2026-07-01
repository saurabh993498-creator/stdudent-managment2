import React, { useState } from "react";
import Student from "./student";

function App() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo || !name || !marks) {
      setError("Please fill all fields");
      return;
    }

    const newStudent = {
      rollNo,
      name,
      marks,
    };

    setStudents([...students, newStudent]);

    setRollNo("");
    setName("");
    setMarks("");
    setError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333" }}>🎓 Student Management System</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          maxWidth: "500px",
          margin: "20px auto",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle}>Add Student</button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}
      </form>

      <Student students={students} setStudents={setStudents} />
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  background: "#46e580",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};

export default App;
