import React from 'react'
import logoclair from '../img/icons/logoclair.svg'

function Footer() {
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
                        <p className="footer__info__contact__number__phone">Téléphone : 06 79 42 86 73</p>
                        <p className="footer__info__contact__number__line"></p>
                        <p className="footer__info__contact__number__mail">E-mail : youlens.production@gmail.com</p>
                    </div>
                </section>
                <section className="footer__info__social">
                    <div className="footer__info__social__link">
                        <a className="footer__info__social__link__insta" href="https://www.instagram.com/guillaumecourt_?igsh=bWh6NzR4ZjFvdjI2">Instagram</a>
                        <a className="footer__info__social__link__behance" href="">Behance</a>
                    </div>
                </section>
                <p className="footer__info__rights">© 2024 Youlens. All Rights Reserved.</p>
            </section>
        </footer>
    )
}

export default Footer