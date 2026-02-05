import React from "react";

function AddStudent({
  name,
  age,
  setName,
  setAge,
  handleSubmit,
  editId
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input id="one"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <button type="submit">
        {editId === null ? "Add" : "Update"}
      </button>
    </form>
  );
}

export default AddStudent;
