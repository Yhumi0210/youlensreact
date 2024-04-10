import React, { useEffect } from 'react'
import PropTypes from 'prop-types' // Étape 1

const HorizontalScrollWrapper = ({ children }) => {
    useEffect(() => {
        const handleWheel = (e) => {
            e.currentTarget.scrollLeft += e.deltaY
            e.preventDefault()
        }

        const element = document.getElementById('horizontal-scroll-wrapper')
        element.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            element.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return (
        <div id="horizontal-scroll-wrapper" style={{ overflowX: 'auto' }}>
            {children}
        </div>
    )
}

HorizontalScrollWrapper.propTypes = { // Étape 2
    children: PropTypes.node.isRequired,
}

export default HorizontalScrollWrapper
