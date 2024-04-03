import React from 'react'
import { Link } from 'react-router-dom' // Importez Link depuis react-router-dom
// Assurez-vous d'importer logolight de l'endroit approprié
import logolight from '../img/icons/logoclair.svg' // Modifiez avec le chemin d'import correct

function Header() {
    return (
        <header id="header" className="hero">
            <Link to="/" className="hero__brand">
                <p>YOULENS</p>
            </Link>
            <nav className="hero__nav">
                <ul className="hero__nav__link">
                    <li className="hero__nav__link__page"><a className="hero__nav__link__page__a" href="#project-section">projets</a></li>
                    <li className="hero__nav__link__page"><a className="hero__nav__link__page__a" href="#selfportrait-article">à propos</a></li>
                    <li className="hero__nav__link__page"><a className="hero__nav__link__page__a" href="#contact-section">contact</a></li>
                </ul>
            </nav>
            <img className="logo" src={logolight} alt="logo Youlens" />
        </header>
    )
}

export default Header