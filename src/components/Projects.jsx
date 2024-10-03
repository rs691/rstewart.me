import { Link, Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const projectData = [
  {
    id: 1,
    name: 'Project 1',
    path: 'project.png',
    description: 'Interactive image gallery with modal views',
    color: '#3DEFE9'
  },
  {
    id: 2,
    name: 'Project 2',
    path: 'iwccLogo.png',
    description: 'Description for project 2',
    color: '#D83BD2'
  },
  {
    id: 3,
    name: 'Project 3',
    path: 'project3',
    description: 'Description for project 3',
    color: '#FECC1B'
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 style={{ color: '#3DEFE9', marginBottom: '2rem' }}>Projects</h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "1rem"
      }}>
        {projectData.map((project) => (
          <Link 
            key={project.id}
            to={`/projects/${project.path}`}
            style={{
              textDecoration: 'none',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '2rem',
              borderRadius: '12px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            className="project-card"
          >
            <h2 style={{ color: project.color, marginBottom: '1rem' }}>
              {project.name}
            </h2>
            <p style={{ color: '#fff' }}>{project.description}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;