import React from 'react'
import logofonce from '../img/icons/logofonce.svg'
import iconCamera from '../img/icons/iconcamera.svg'
import iconPhoto from '../img/icons/iconphoto.svg'
import iconDrone from '../img/icons/icondrone.svg'
import iconMontage from '../img/icons/iconmontage.svg'
import portraitGuillaume from '../img/photo/portraitguillaume.webp'

function SelfPortraitArticle() {
    return (
        <article id="selfportrait-article" className="selfportrait">
            <a className="selfportrait__container" href="#header">
                <img className="logo" src={logofonce} alt="logo Youlens" />
            </a>
            <h2 className="selfportrait__title">Qui suis-je ?</h2>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__me">
                    Je m’appelle Guillaume Court, Ancien lighter
                    dans le cinéma d’animation 3D, je me suis re converti
                    dans la réalisation vidéo pour retrouver
                    le contact humain et le travail en extérieur
                    qui me manquaient dans mon quotidien.
                    <br />
                    Mes compétences acquises au sein des studios
                    de long métrages d’animation m’ont permis
                    de développer un œil très critique et exigeant
                    quant à la qualité artistique d’une image.
                    <br />
                    Je réalise mes vidéos entièrement, de la prise
                    de vue jusqu’à la post-production.
                </p>
                <img className="selfportrait__text__img" src={portraitGuillaume} alt="portrait de Guillaume" />
            </div>
            <h3 className="selfportrait__title">Mes services</h3>
            <p className="selfportrait__line"></p>
            <section className="selfportrait__service">
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconCamera} alt="Services de vidéo" />
                    <p className="selfportrait__service__detail__text">Vidéo</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconPhoto} alt="Services de photographie" />
                    <p className="selfportrait__service__detail__text">Photographie</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconDrone} alt="Services de drone" />
                    <p className="selfportrait__service__detail__text">Drône</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconMontage} alt="Services de post production" />
                    <p className="selfportrait__service__detail__text">Post production</p>
                </div>
            </section>
            <h4 className="selfportrait__title">Comment ça se passe ?</h4>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__me">
                    Petit texte à prévoir pour dire comment tu travailles ? ou alors juste détailler ton processus de travail par étapes (prise de contact - échange - réflexion - conception - réalisation - suivi…) enfin ce que tu veux.
                </p>
            </div>
        </article>
    )
}

export default SelfPortraitArticle