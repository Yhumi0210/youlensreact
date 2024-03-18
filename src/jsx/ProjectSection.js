import React from 'react'
import logofonce from '../img/icons/logofonce.svg'

const medias = [
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Saint-Guilhem-le-Désert'
    },
    {
        url: 'ODGsPxI4FCA',
        type: 'youtube',
        title: 'Machin'
    },
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Truc'
    },
    {
        url: 'bVGJzWWQKM4',
        type: 'youtube',
        title: 'Machin'
    },
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Truc'
    },
    {
        url: 'xC0wPoG2aEE',
        type: 'youtube',
        title: 'Machin'
    }
]

const ProjectSection = () => {
    return (
        <section id="project-section" className="project">
            <a className="project__logo" href="#header">
                <img className="logo" src={logofonce} alt="logo Youlens" />
            </a>
            <div className="project__container">
                <p id="max" className="project__container__display">grand format</p>
                <p id="min" className="project__container__display">miniatures</p>
            </div>
            <div className="project__gallery">
                {medias.map((media, index) => (
                    <div key={index} className="project__gallery__item">
                        {media.type === 'photos' && (
                            <img src={media.url} className="project__gallery__item__media" alt={`Media ${index}`} />
                        )}
                        {media.type === 'video' && (
                            <video controls>
                                <source src={media.url} className="project__gallery__item__media" type="video/mp4" />
                                Votre navigateur ne supporte pas les vidéos.
                            </video>
                        )}
                        {media.type === 'youtube' && (
                            <iframe className="project__gallery__item__media" src={`https://www.youtube.com/embed/${media.url}`}
                                title={media.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                        <div className="project__gallery__item__info">
                            <p className="project__gallery__item__info__title">{media.title}</p>
                            <p className="project__gallery__item__info__type">{media.type.toLowerCase()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection