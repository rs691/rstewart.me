import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectImages = [
  {
    id: 0,
    title: "Project One",
    src: "/public/project.png",
    description: "Description of Project One"
  },
  {
    id: 1,
    title: "Project Two",
    src: "/public/code.jpg",
    description: "Description of Project Two"
  },
  {
    id: 2,
    title: "Project Three",
    src: "/logo.png",
    description: "Description of Project Three"
  }
];

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  return (
    <div className="project-card" style={{
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '1rem',
      borderRadius: '12px',
      marginBottom: '0px'
    }}>
      <img
        style={{
          width: "80%",
          aspectRatio: "1 / 1",
          height: "auto",
          borderRadius: "8px",
          marginBottom: '1rem'
        }}
        src={project.src}
        alt={project.title}
      />
      <h3 style={{ color: '#3DEFE9' }}>{project.title}</h3>
      <Button 
        variant="outline-light" 
        onClick={() => setShow(true)}
        style={{ marginTop: '1rem' }}
      >
        View Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="project-modal-title"
        size="lg"
      >
        <Modal.Header closeButton style={{ background: '#1a1a1a', color: '#fff' }}>
          <Modal.Title id="project-modal-title">
            {project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#1a1a1a', color: '#fff' }}>
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: '1rem'
            }}
            src={project.src}
            alt={project.title}
          />
          <h4 style={{ color: '#D83BD2', marginTop: '1rem' }}>Project Details</h4>
          <p>{project.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

function ProjectGallery() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem'
    }}>
      {projectImages.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;