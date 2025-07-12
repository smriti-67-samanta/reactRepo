import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Website Redesign", description: "Redesign company website" },
  { id: 2, name: "Mobile App", description: "Develop new mobile application" },
  { id: 3, name: "API Integration", description: "Integrate with third-party API" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;