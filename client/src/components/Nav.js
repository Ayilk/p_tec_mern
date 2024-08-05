import React from "react";
//Nos va a permitir enrutar sin que la pagina recargue, cosa que haría con la etiqueta <a>
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/listaModulos"}>
                  LISTA MODULOS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/crearModulo"}>
                  CREAR MODULOS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/crearPregunta"}>
                  CREAR PREGUNTA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
