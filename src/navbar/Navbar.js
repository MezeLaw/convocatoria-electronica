import React from 'react';

function Navbar({ toggleFavoritos, setFiltroTitulo }) {
  const handleSearchChange = (event) => {
    setFiltroTitulo(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Convocatorias</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={toggleFavoritos}>
                Favoritos
              </button>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar por título"
            aria-label="Buscar"
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
