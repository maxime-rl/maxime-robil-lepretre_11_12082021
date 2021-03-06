import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Error404Page.scss";

/**
 * Error404Page component
 * Display error 404 page
 */
class Error404Page extends Component {
  render() {
    return (
      <main className="error404-page">
        <span className="error404-page__title">404</span>
        <p className="error404-page__info-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink
          className="error404-page__redirect-link"
          activeClassName="active-link"
          to="/"
        >
          Retourner sur la page d'accueil
        </NavLink>
      </main>
    );
  }
}

export default Error404Page;
