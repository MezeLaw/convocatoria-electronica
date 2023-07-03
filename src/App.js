import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './navbar/Navbar';
import Favoritos from './favoritos/favoritos';
import Badge from 'react-bootstrap/Badge';

function App() {
  const [convocatorias, setConvocatorias] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [showFavoritos, setShowFavoritos] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.cultura.gob.ar/api/v2.0/convocatorias/?offset=170');
      const data = await response.json();
      setConvocatorias(data.results);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const addToFavorites = (convocatorias) => {
    setFavoritos([...favoritos, convocatorias]);
  };

  const toggleFavoritos = () => {
    setShowFavoritos(!showFavoritos);
  };

  return (
    <div>
      <Navbar toggleFavoritos={toggleFavoritos} /> {}
      <div className='container mt-4'>
        <h1>asd</h1>
        <div className="row align-items-stretch container">
          {convocatorias.map((convocatoria) => (
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
                  <div className="d-flex justify-content-between mt-auto align-self-start">
                    <button
                      className="btn btn-warning"
                      onClick={() => addToFavorites(convocatoria)}
                    >
                      Agregar a favoritos
                    </button>
                    <button
                      className="btn btn-primary"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Favoritos
          favoritos={favoritos}
          show={showFavoritos}
          toggleFavoritos={toggleFavoritos}
        />  
      </div>
    </div>
  );
}

export default App;
