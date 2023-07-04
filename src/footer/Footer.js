import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container-fluid">
        <p>&copy; {new Date().getFullYear()} E-Convocatoria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
