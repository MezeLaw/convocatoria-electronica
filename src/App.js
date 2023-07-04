import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CustomNavbar from './navbar/Navbar';
import Favoritos from './favoritos/favoritos'; 
import Footer from './footer/Footer';
import Convocatoria from './convocatoria/Convocatoria';

function App() {
  const [convocatorias, setConvocatorias] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [showFavoritos, setShowFavoritos] = useState(false);
  const [filtroTitulo, setFiltroTitulo] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.cultura.gob.ar/api/v2.0/convocatorias');
      const data = await response.json();
      setConvocatorias(data.results);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const addToFavorites = (convocatoria) => { 
    const likeado = favoritos.some((favorite) => favorite.id === convocatoria.id);
    
    if (!likeado) {
      setFavoritos([...favoritos, convocatoria]);
    }
  };

  const toggleFavoritos = () => {
    setShowFavoritos(!showFavoritos);
    setFiltroTitulo("");
  };
  
  return (
    <div>
      <CustomNavbar toggleFavoritos={toggleFavoritos} setFiltroTitulo={setFiltroTitulo} /> 
      <div className='container mt-4'>
        <h1>Ultimas convocatorias</h1>
        <div className="row align-items-stretch container">
          {convocatorias.map((convocatoria) => {
            if (convocatoria.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())) {
              return (
                <Convocatoria key={convocatoria.id} convocatoria={convocatoria} addToFavorites={addToFavorites}/>
              );
            }
            return null;
          })}
          {convocatorias.length > 0 && convocatorias.filter(convocatoria => convocatoria.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())).length === 0 && (
            <div className="col-12">
              <div className="alert alert-info" role="alert">
                No se encontraron convocatorias que coincidan con el filtro de título.
              </div>
            </div>
          )}
        </div>
        <Favoritos
          favoritos={favoritos}
          show={showFavoritos}
          toggleFavoritos={toggleFavoritos}
        />  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
