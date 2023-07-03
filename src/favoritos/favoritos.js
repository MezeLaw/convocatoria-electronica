import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Favoritos = ({ favoritos, show, toggleFavoritos }) => {
  return (
    <div
      className={`offcanvas offcanvas-end${show ? ' show' : ''}`}
      tabIndex="-1"
      id="favoritosOffcanvas"
      aria-labelledby="favoritosOffcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="favoritosOffcanvasLabel">Favoritos</h5>
        <button type="button" className="btn-close text-reset" onClick={toggleFavoritos}></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-group">
          {favoritos.map((convocatoria) => (
            <li key={convocatoria.id} className="list-group-item">
              <button className="btn-close text-reset"></button>
              <img src={convocatoria.imagen} alt="imagen-convocatoria" className="card-img-top" />
              <h5>{convocatoria.titulo}</h5> 
              <Badge bg={convocatoria.estado === 'abierta' ? 'success' : 'danger'}>
                    {convocatoria.estado}
              </Badge> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favoritos;
