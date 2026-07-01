import React from "react";

function Student({ students, setStudents }) {
  const deleteStudent = (rollNo) => {
    setStudents(
      students.filter((student) => student.rollNo !== rollNo)
    );
  };

  if (students.length === 0) {
    return (
      <h3 style={{ color: "#ed0d0d" }}>
        No Student Records Available
      </h3>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {students.map((student) => (
        <div
          key={student.rollNo}
          style={{
            width: "250px",
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0px)";
          }}
        >
          <h2 style={{ color: "#5534ea" }}>
            👨‍🎓 {student.name}
          </h2>

          <p>
            <strong>Roll No:</strong> {student.rollNo}
          </p>

          <p>
            <strong>Marks:</strong> {student.marks}
          </p>

          <button
            onClick={() => deleteStudent(student.rollNo)}
            style={{
              background: "#f40808",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Student;