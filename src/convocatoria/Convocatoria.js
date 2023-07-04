import React from 'react';
import { Badge } from 'react-bootstrap';

const Convocatoria = ({ convocatoria, addToFavorites }) => {
  return (
    <div key={convocatoria.id} className="col-md-4 mb-4">
      <div className="card" style={{ minHeight: "100%" }}>
        <div className="badge">
          <Badge bg={convocatoria.estado === 'abierta' ? 'success' : 'danger'}>
            {convocatoria.estado}
          </Badge>
        </div>
        <div className="card-body d-flex flex-column">
          <img src={convocatoria.imagen} alt="imagen-convocatoria" className="card-img-top convocatoria-imagen" />
          <h5 className="card-title"><strong>{convocatoria.titulo}</strong></h5>
          <div className="d-flex justify-content-between align-items-end mt-auto">
            <button
              className="btn btn-warning"
              onClick={() => addToFavorites(convocatoria)}
            >
              Agregar a favoritos
            </button>
          </div>
          <div className="mt-2">
            <button
              className="btn btn-primary"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convocatoria;
