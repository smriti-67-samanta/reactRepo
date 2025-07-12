import { useParams, Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Website Redesign", description: "Redesign company website" },
  { id: 2, name: "Mobile App", description: "Develop new mobile application" },
  { id: 3, name: "API Integration", description: "Integrate with third-party API" },
];

const tasks = {
  1: [
    { id: 1, name: "Design Homepage", status: "Completed" },
    { id: 2, name: "Create Contact Form", status: "In Progress" },
  ],
  2: [
    { id: 3, name: "User Authentication", status: "Not Started" },
    { id: 4, name: "Dashboard UI", status: "In Progress" },
  ],
  3: [
    { id: 5, name: "API Documentation", status: "Completed" },
    { id: 6, name: "Endpoint Testing", status: "Not Started" },
  ],
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const projectTasks = tasks[id] || [];

  
  if (!project) {
    return (
      <div className="project-details">
        <h1>Project Not Found</h1>
        <Link to="/" className="button">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      
      <h2>Tasks</h2>
      {projectTasks.length > 0 ? (
        <ul className="tasks">
          {projectTasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found for this project.</p>
      )}
      
      <Link to={`/edit-project/${id}`} className="button">Edit Project</Link>
      <Link to="/" className="button">Back to Dashboard</Link>
    </div>
  );
};

export default ProjectDetails;