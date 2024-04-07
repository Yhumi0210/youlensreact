import React, { useContext } from 'react'
import logofonce from '../img/icons/logofonce.svg'
import { projects } from './projects'
import ScrollbarContext from './ScrollbarContext'
const ProjectSection = () => {

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
            <div className="project__logo" onClick={scrollToTop}>
                <img className="logo" src={logofonce} alt="logo Youlens" />
            </div>
            <h2 className="project__title">Mes réalisations</h2>
            <p className="project__line"></p>
            <div id='thumbnail' className='project__thumbnail'>
                {projects.map((project) => (
                    <div key={project.id} className='project__thumbnail__item'>
                        <div className='container'>
                            {project.type === 'photos' ? (
                                project.images.slice(0, 4).map((imageName) => {
                                    const imageSrc = (`../img/photo/${imageName}`)
                                    return <img key={imageName} src={imageSrc} alt={imageName} className='project__thumbnail__item__medias' />
                                })
                            ) : project.type === 'youtube' ? (
                                project.images.map((videoId, index) => (
                                    <iframe
                                        key={index}
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        frameBorder='0'
                                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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
        </section>
    )
}

export default ProjectSection
