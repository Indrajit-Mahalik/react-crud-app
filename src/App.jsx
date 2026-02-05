// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import App from './addStudent'


// function App() {
//     const [students, setStudents] = useState([]);
//     const [name, setName] = useState("");

//   return (
//     <>
//       <h1>Crud Operation</h1>
//        <div></div>
//        <addStudent/>
//     </>
//   )
// }

// export default App



// import React, { useState } from "react";
// import addData from "./addData";

// function App() {
//   const [students, setStudents] = useState([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [editId, setEditId] = useState(null);

//   // CREATE & UPDATE
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editId === null) {
//       // CREATE
//       setStudents([
//         ...students,
//         { id: Date.now(), name: name, age: age }
//       ]);
//     } else {
//       // UPDATE
//       setStudents(
//         students.map((student) =>
//           student.id === editId
//             ? { ...student, name: name, age: age }
//             : student
//         )
//       );
//       setEditId(null);
//     }

//     setName("");
//     setAge("");
//   };

//   // READ (display is automatic in JSX)

//   // EDIT
//   const handleEdit = (student) => {
//     setName(student.name);
//     setAge(student.age);
//     setEditId(student.id);
//   };

//   // DELETE
//   const handleDelete = (id) => {
//     setStudents(students.filter((student) => student.id !== id));
//   };

//   return (
//     <>
//     <div style={{ padding: "20px" }}>
//       <h2>React CRUD Operation</h2>

//       <form onSubmit={handleSubmit}>
//         <input id="one"
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input 
//           type="number"
//           placeholder="Enter age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//         />

//         <button type="submit">
//           {editId === null ? "Add" : "Update"}
//         </button>
//       </form>

//       <hr />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>
//                 <button onClick={() => handleEdit(student)}>Edit</button>
//                 <button onClick={() => handleDelete(student.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// }

// export default App;



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
