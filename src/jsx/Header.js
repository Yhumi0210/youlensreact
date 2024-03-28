import React from 'react'
import logolight from '../img/icons/logoclair.svg'

function Header() {
    return (
        <header id="header" className="hero">
            <a href="https://yhumi0210.github.io/youlens/" className="hero__brand">
                <p>YOULENS</p></a>
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