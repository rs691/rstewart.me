import { ImageComponent, images } from './ImageComponent';

function Gallery() {
  return (
    <div>
      <h2 style={{ color: '#3DEFE9', marginBottom: '2rem' }}>Image Gallery</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        padding: "1rem"
      }}>
        {images.map((image) => (
          <div 
            key={image.id}
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '1rem',
              borderRadius: '12px'
            }}
          >
            <ImageComponent imageId={image.id} />
            <h3 style={{ 
              color: '#D83BD2', 
              marginTop: '1rem',
              fontSize: '1.2rem' 
            }}>
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;