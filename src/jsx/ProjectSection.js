import React, {useState, useEffect, useContext} from 'react'
import logofonce from '../img/icons/logofonce.svg'
import { medias } from './medias'
import { projects } from './projects'
import ScrollbarContext from './ScrollbarContext'

const ProjectSection = () => {
    const [isGalleryMode, setIsGalleryMode] = useState(false)
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    // Nouvel état pour suivre quel bouton est actif
    const [activeButton, setActiveButton] = useState('miniatures') // 'miniatures' ou 'grand format'

    const handleGalleryMode = () => {
        setIsGalleryMode(true)
        setActiveButton('grand format')
    }
    const handleThumbnailMode = () => {
        setIsGalleryMode(false)
        setActiveButton('miniatures')
    }

    const nextMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % medias.length)
    }

    const prevMedia = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + medias.length) % medias.length)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch(event.key) {
                case 'ArrowLeft':
                    prevMedia()
                    break
                case 'ArrowRight':
                    nextMedia()
                    break
                default:
                    break
            }
        }

        // Attacher l'écouteur d'événements
        window.addEventListener('keydown', handleKeyDown)

        // Fonction de nettoyage pour détacher l'écouteur d'événements
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentMediaIndex, medias.length])

    const galleryClass = `project__container__display ${activeButton === 'grand format' ? 'open' : ''}`
    const thumbnailClass = `project__container__display ${activeButton === 'miniatures' ? 'open' : ''}`

    const renderMedia = (media, index, mediaClass) => {
        switch (media.type) {
            case 'photos': {
                const imageSrc = (`../img/photo/${media.fileName}`) // Accédez à l'image par son nom de fichier
                return <div className='container'>
                            <img src={imageSrc} alt={`Media ${index}`} className={mediaClass} />
                        </div>
            }
            case 'youtube':
                return (
                    <div className='container'>
                        <iframe src={`https://www.youtube.com/embed/${media.url}`}
                            title={media.title} frameBorder='0'
                            allow='accelerometer clipboard-write encrypted-media gyroscope picture-in-picture'
                            allowFullScreen
                            className='iframe'
                        ></iframe>
                    </div>
                )
            default:
                return null
        }
    }

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
        <section id='project-section' className='project'>
            <div className='project__logo' onClick={scrollToTop}>
                <img className='logo' src={logofonce} alt='logo Youlens' />
            </div>
            <div className='project__container'>
                <p id='max' className={galleryClass} onClick={handleGalleryMode}>grand format</p>
                <p id='min' className={thumbnailClass} onClick={handleThumbnailMode}>miniatures</p>
            </div>
            {!isGalleryMode ? (
                <div id='thumbnail' className='project__thumbnail'>
                    {projects.map((project) => (
                        <div key={project.id} className='project__thumbnail__item'>
                            <div className='container'>
                                {project.type === 'photos' ? (
                                    // Pour les projets de type 'photos', affichez les images
                                    project.images.map((imageName) => {
                                        const imageSrc = (`../img/photo/${imageName}`) // Assurez-vous que le chemin est correct
                                        return <img key={imageName} src={imageSrc} alt={imageName} className='project__thumbnail__item__medias' />
                                    })
                                ) : project.type === 'youtube' ? (
                                    // Pour les projets de type 'youtube', affichez les vidéos
                                    project.images.map((videoId, index) => (
                                        <iframe
                                            key={index}
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            frameBorder="0"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className='iframe'
                                            title={project.title}
                                        ></iframe>
                                    ))
                                ) : null}
                            </div>
                            <div className='project__thumbnail__item__info'>
                                <p className='project__thumbnail__item__info__title'>{project.title}</p>
                                <p className='project__thumbnail__item__info__type'>{project.type.toLowerCase()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div id='gallery' className='project__gallery'>
                    {renderMedia(medias[currentMediaIndex], currentMediaIndex, 'project__gallery__media')}
                    <div className='project__gallery__infos'>
                        <svg onClick={prevMedia} className='project__gallery__infos__arrowleft w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                        </svg>

                        <p className='project__gallery__infos__title'>{medias[currentMediaIndex].title}</p>
                        <p className='project__gallery__infos__type'>{medias[currentMediaIndex].type.toLowerCase()}</p>
                        <svg onClick={nextMedia} className='project__gallery__infos__arrowright w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                        </svg>

                    </div>
                </div>
            )}
        </section>
    )
}

export default ProjectSection