import React from 'react'
import { Link } from 'react-router-dom'
import logoclair from '../img/icons/logoclair.svg'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Permet un effet de défilement doux
        })
    }

    return (
        <footer id="contact-section" className="footer">
            <a className="footer__container" href="#header">
                <img className="logo" src={logoclair} alt="logo Youlens" />
            </a>
            <section className="footer__info">
                <h5 className="footer__info__title">
                    Me contacter
                </h5>
                <section className="footer__info__contact">
                    <div className="footer__info__contact__number">
                        <p className="footer__info__contact__number__phone">Téléphone : <a href="tel:+3379428673">06 79 42 86 73</a></p>
                        <p className="footer__info__contact__number__line"></p>
                        <p className="footer__info__contact__number__mail">E-mail : <a href="mailto:youlens.production@gmail.com">youlens.production@gmail.com</a></p>
                    </div>
                </section>
                <section className="footer__info__social">
                    <div className="footer__info__social__link">
                        <a className="footer__info__social__link__insta" href="https://www.instagram.com/youlens__?igsh=NXR6Y3F4ZjJyYjdi"  target="_blank" rel="noreferrer noopener">Instagram</a>
                        {/*<a className="footer__info__social__link__behance" href="https://www.instagram.com/guillaumecourt_?igsh=bWh6NzR4ZjFvdjI2">Behance</a>*/}
                    </div>
                </section>
                <p className="footer__info__rights">
                    {/* Utilisez onClick avec Link pour déclencher le défilement vers le haut */}
                    <Link to="/mentions-legales" onClick={scrollToTop}>Mentions Légales</Link>
                    <br />© 2024 Youlens. All Rights Reserved.
                </p>
            </section>
        </footer>
    )
}

export default Footer