import React, { useState } from "react";
import AddStudent from "./AddStudent";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE & UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId === null) {
      setStudents([...students, { id: Date.now(), name, age }]);
    } else {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, name, age }
            : student
        )
      );
      setEditId(null);
    }

    setName("");
    setAge("");
  };

  // EDIT
  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setEditId(student.id);
  };

  // DELETE
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React CRUD Operation</h2>

      {/* FORM COMPONENT */}
      <AddStudent
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        handleSubmit={handleSubmit}
        editId={editId}
      />

      <hr />

      {/* TABLE */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button id="edit" onClick={() => handleEdit(student)}>Edit</button>
                <button id="delete" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
