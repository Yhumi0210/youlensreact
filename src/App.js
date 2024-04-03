import React from 'react'
import { Route, Routes } from 'react-router-dom' // Importez Routes au lieu de Switch
import Header from './jsx/Header'
import Footer from './jsx/Footer'
import HomePage from './HomePage' // Ajustez le chemin si nécessaire
import LegalMentions from './jsx/LegalMentions' // Ajustez le chemin si nécessaire

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mentions-legales" element={<LegalMentions />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App