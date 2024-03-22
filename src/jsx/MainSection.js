import React from 'react'
import videoSrc from '../img/video/Youlens_showreel_2023-20242.mp4' // Assurez-vous de mettre à jour le chemin d'accès

function MainSection() {
    return (
        <section id="main-section" className="main">
            {/* Commenté puisque l'incorporation de vidéos YouTube comme ceci est généralement gérée différemment en React. Voir ci-dessous pour une alternative */}
            {/* <iframe className="main__video" src="https://www.youtube.com/embed/ODGsPxI4FCA?si=9VI1UHV2DrCYU3in&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share" allowFullScreen></iframe> */}

            <div className="main__container">
                <video className="main__container__video" controls autoPlay loop src={videoSrc}></video>
            </div>
            <h1 className="main__h1">Sublimer les projets par l’image.
            </h1>
            <a href="#project-section" className="main__arrow">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
            </a>
        </section>
    )
}

export default MainSection