import React, { useState, useEffect } from 'react'
import logofonce from '../img/icons/logofonce.svg'

const medias = [
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Saint-Guilhem-le-Désert',
        folder: '',
    },
    {
        url: 'j2yMcPuysl4',
        type: 'youtube',
        title: 'Villa Provence - FPV Drone tour'
    },
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Truc'
    },
    {
        url: 'bVGJzWWQKM4',
        type: 'youtube',
        title: 'Brasserie Le 80 - Méribel'
    },
    {
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: 'photos',
        title: 'Truc'
    },
    {
        url: 'xC0wPoG2aEE',
        type: 'youtube',
        title: 'Domaine Mejan, Lodges  - FPV drone Tour'
    }
]

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
            case 'photos':
                return <img src={media.url} alt={`Media ${index}`} className={mediaClass} style={{ width: '100%' }} />
            case 'youtube':
                return (
                    <iframe src={`https://www.youtube.com/embed/${media.url}`}
                            title={media.title} frameBorder='0'
                            allow='accelerometer clipboard-write encrypted-media gyroscope picture-in-picture'
                            allowFullScreen
                            className={mediaClass}
                    ></iframe>
                )
            default:
                return null
        }
    }

    return (
        <section id='project-section' className='project'>
            <a className='project__logo' href='#header'>
                <img className='logo' src={logofonce} alt='logo Youlens' />
            </a>
            <div className='project__container'>
                <p id='max' className={galleryClass} onClick={handleGalleryMode}>grand format</p>
                <p id='min' className={thumbnailClass} onClick={handleThumbnailMode}>miniatures</p>
            </div>
            {!isGalleryMode ? (
                <div id='thumbnail' className='project__thumbnail'>
                    {medias.map((media, index) => (
                        <div key={index} className='project__thumbnail__item'>
                            {renderMedia(media, index, 'project__thumbnail__item__medias')}
                            <div className='project__thumbnail__item__info'>
                                <p className='project__thumbnail__item__info__title'>{media.title}</p>
                                <p className='project__thumbnail__item__info__type'>{media.type.toLowerCase()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div id='gallery' className='project__gallery'>
                    {renderMedia(medias[currentMediaIndex], currentMediaIndex, 'project__gallery__media')}
                    <div className='project__gallery__infos'>
                        <svg onClick={prevMedia} className='project__gallery__infos__arrowleft w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5' />
                        </svg>
                        <p className='project__gallery__infos__title'>{medias[currentMediaIndex].title}</p>
                        <p className='project__gallery__infos__type'>{medias[currentMediaIndex].type.toLowerCase()}</p>
                        <svg onClick={nextMedia} className='project__gallery__infos__arrowright w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5' />
                        </svg>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ProjectSection