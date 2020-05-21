import React from 'react';
import './style.css';

const Header = (props) => {

  // Set initial state of Menu
  let showMenu = false;

  const toggleMenu = () => {

    // Select DOM Items
    const menu = document.querySelector('.smallScreenNav');
    const menuNav = document.querySelector('.smallScreenNav-menu');
    const navItems = document.querySelectorAll('.smallScreenNav-item');

    if (!showMenu) {
      menu.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
      // Reset Menu State
      showMenu = true;
    } else {
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      // Reset Menu State
      showMenu = false;
    }
  }

  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="/">Inicio</a>
        <a href="/perfil">Perfil</a>
        <a href="/contacto">Contacto</a>
        <a href="/publicaciones">Publicaciones</a>
      </nav>
      <nav className="headerBarsMenu">
        <i className="fas fa-bars fa-2x" onClick={toggleMenu}></i>
      </nav>
      <nav className="smallScreenNav">
        <ul className="smallScreenNav-menu">
          <i className="far fa-window-close fa-2x" onClick={toggleMenu}></i>
          <li className="smallScreenNav-item inicio">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/perfil" className="nav-link">Perfil</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/contacto" className="nav-link">Contacto</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/publicaciones" className="nav-link">Publicaciones</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <a href="https://github.com/GuilleHM" target="_blank" rel="noopener noreferrer" title="GuilleHM en Github">
          <i className="fab fa-github fa-2x" ></i>
        </a>
        <a href="https://www.linkedin.com/in/guillermo-h-a6639aa8/"
          target="_blank" rel="noopener noreferrer" title="GuilleHM en LinkedIn">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </header>
  )
}

export default Header