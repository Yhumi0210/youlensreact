import React from 'react'
import Header from './jsx/Header'
import MainSection from "./jsx/MainSection";
import ProjectSection from "./jsx/ProjectSection";
import SelfPortraitArticle from "./jsx/SelfPortraitArticle";
import Footer from "./jsx/Footer"; // Assurez-vous que le chemin est correct
// Importez les autres composants ici

function App() {
  return (
      <div>
        <Header />
        <MainSection />
        <ProjectSection />
        <SelfPortraitArticle />
        <Footer />
      </div>
  )
}

export default App
