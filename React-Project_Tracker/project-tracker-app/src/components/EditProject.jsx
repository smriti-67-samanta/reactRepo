import { useParams, useNavigate } from "react-router-dom";

const projects = [
  { id: 1, name: "Website Redesign", description: "Redesign company website" },
  { id: 2, name: "Mobile App", description: "Develop new mobile application" },
  { id: 3, name: "API Integration", description: "Integrate with third-party API" },
];

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  
  if (!project) {
    return <div>Project not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project ${id} updated`);
    navigate(`/projects/${id}`);
  };

  return (
    <div className="form-container">
      <h1>Edit Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            defaultValue={project.name}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            defaultValue={project.description}
            required
          />
        </label>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default EditProject;