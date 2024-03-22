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
                    <img className="selfportrait__service__detail__icon" src={iconDrone} alt="Services de drone" />
                    <p className="selfportrait__service__detail__text">Drône</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconPhoto} alt="Services de photographie" />
                    <p className="selfportrait__service__detail__text">Photographie</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconMontage} alt="Services de post production" />
                    <p className="selfportrait__service__detail__text">Post production</p>
                </div>
            </section>
            <h4 className="selfportrait__title">Comment ça se passe ?</h4>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__how">
                    Youlens est une entreprise de communication vidéo de tous types et<br/>
                    spécialisée dans la vidéo aérienne en drone ou en drone FPV. Je réalise mes<br/>
                    photographies et vidéos entièrement seul, de la prise de vue jusqu’à la post<br/>
                    production. Je peux travailler partout dans le monde.<br/>
                    <br/>
                    Les projets vont du mariage à la vidéo corporate d’entreprise en passant par la<br/>
                    couverture d&#39;événements exceptionnels ou encore la mise en avant de lieux culturels<br/>
                    ou historiques. Il m’arrive également de travailler dans un domaine plus technique<br/>
                    dans des usines de fabrications ou dans le BTP.<br/>
                    <br/>
                    Une prise de contact débouche sur une discussion autour de votre projet quel qu’il<br/>
                    soit, toutes les idées et envies sont réalisables en vidéo tant qu’elles correspondent à<br/>
                    votre image.<br/>
                    <br/>
                    Laissez moi vous en dire plus sur ce qu’est le drone FPV et son intérêt :
                </p>
            </div>
        </article>
    )
}

export default SelfPortraitArticle