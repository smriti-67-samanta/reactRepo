import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project added: ${name}`);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;