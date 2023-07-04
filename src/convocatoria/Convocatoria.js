import React, { useState } from 'react';
import { Badge, Modal, Button } from 'react-bootstrap';

const Convocatoria = ({ convocatoria, addToFavorites }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleAddToFavorites = () => {
    addToFavorites(convocatoria);
  };

  const handleOpenModal = async () => {
    try {
      const response = await fetch(`https://www.cultura.gob.ar/api/v2.0/convocatorias/${convocatoria.id}`, {
        mode: 'no-cors', 
      });
      const data = await response.json();
      setModalData(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching convocatoria details:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              onClick={handleAddToFavorites}
            >
              Agregar a favoritos
            </button>
          </div>
          <div className="mt-2">
            <button
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalData ? (
            <>
              <img src={modalData.imagen} alt="Imagen Convocatoria" style={{ maxWidth: '100%', marginBottom: '10px' }} />
              <p>
                <strong>Fecha de inicio: </strong>
                {modalData.fecha_inicio}
              </p>
              <p>
                <strong>Fecha de fin: </strong>
                {modalData.fecha_fin}
              </p>
              <p style={{ wordWrap: 'break-word', maxWidth: '100%' }}>
                <strong>Enlace: </strong>
                <a href={modalData.link}>{modalData.link}</a>
              </p> 
            </>
          ) : (
            <p>cargando...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  );
};

export default Convocatoria;
