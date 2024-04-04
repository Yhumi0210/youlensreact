import React, {useContext} from 'react'
import logofonce from '../img/icons/logoblanc.svg'
import iconCamera from '../img/icons/cameraicon.svg'
import iconPhoto from '../img/icons/photoicon.svg'
import iconDrone from '../img/icons/droneicon.svg'
import iconMontage from '../img/icons/montageicon.svg'
import portraitGuillaume from '../img/photo/portraitguillaume.webp'
import ScrollbarContext from './ScrollbarContext'


function SelfPortraitArticle() {

    const { getScrollbar } = useContext(ScrollbarContext)

    const scrollToTop = () => {
        const scrollbar = getScrollbar()
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 500)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <article id="selfportrait-article" className="selfportrait">
            <div className="selfportrait__container" onClick={scrollToTop}>
                <img className="logo" src={logofonce} alt="logo Youlens" />
            </div>
            <h2 className="selfportrait__title">Qui suis-je ?</h2>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__me">
                    Je m’appelle Guillaume Court,<br /> Ancien lighter
                    dans le cinéma d’animation 3D, je me suis reconverti
                    dans la réalisation vidéo pour retrouver
                    le contact humain et le travail en extérieur
                    qui me manquaient dans mon quotidien.<br />
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
                    <p className="selfportrait__service__detail__text">Drone</p>
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
            <h4 className="selfportrait__title">Le processus</h4>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__how">
                    Youlens est une entreprise de communication par l’image spécialisée
                    dans la vidéo aérienne en drone ou en drone FPV. Je réalise mes
                    photographies et vidéos entièrement seul, de la prise de vue jusqu’à
                    la post production. Je peux travailler partout dans le monde.<br />
                    <br />
                    Les projets vont de l’immobilier, du mariage, à la vidéo corporate
                    d’entreprise en passant par la couverture d’événements exceptionnels
                    ou encore la mise en avant de lieux culturels ou historiques.  Il m’arrive
                    également de travailler dans un domaine plus technique dans des usines de
                    fabrications ou dans le BTP.<br />
                    <br />
                    Une prise de contact débouche sur une discussion autour de votre projet
                    quel qu’il soit, toutes les idées et envies sont réalisables en vidéo tant
                    qu’elles correspondent à votre image.
                </p>
            </div>
        </article>
    )
}

export default SelfPortraitArticle