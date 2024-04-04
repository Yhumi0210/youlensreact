import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types' // Assurez-vous d'importer PropTypes
import Scrollbar from 'smooth-scrollbar'
import ScrollbarContext from './ScrollbarContext'

const SmoothScrollbar = ({ children }) => {
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            const scrollbar = Scrollbar.init(scrollRef.current)
            return () => scrollbar.destroy()
        }
    }, [])

    return (
        <ScrollbarContext.Provider value={{ getScrollbar: () => Scrollbar.get(scrollRef.current) }}>
            <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
                {children}
            </div>
        </ScrollbarContext.Provider>
    )
}

// Ajoutez la validation des props ici
SmoothScrollbar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SmoothScrollbar