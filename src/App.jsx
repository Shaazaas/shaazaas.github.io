import React from 'react'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <div className="content">
        <h1 className="name">SHAZYAR..</h1>
        
        <div className="section">
          <h2 className="title">&gt; WORK</h2>
          <p className="text">basically done every work that came in my way , from graphic deign , coding , video editing to doing construction , working as an apprentice , cashier , warehouse manager , but finally im done with those .. jsut an entrepreneur now .. </p>
        </div>

        <div className="section">
          <h2 className="title">&gt; ABOUT</h2>
          <p className="text">
            I am a developer who creates digital experiences, not products.
            i write code that runs deep in the terminal, crafting solutions that emerge from the void.
            When I'm not coding, I explore the depth of existence and push boundaries
            in the human realm.
          </p>
        </div>

        <div className="section">
          <h2 className="title">&gt; LINKS</h2>
          <div className="links">
            <a href="/cv-resume.pdf" className="link" download>
              [DOWNLOAD CV/RESUME]
            </a>
            <a href="https://shaazaas.github.io" className="link" target="_blank" rel="noopener noreferrer">
              [VIEW ACTUAL PORTFOLIO]
            </a>
          </div>
        </div>

        <div className="section">
          <h2 className="title">&gt; CONNECT</h2>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/sha_zy_ar/" 
              className="link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              [INSTAGRAM]
            </a>
            <a 
              href="https://open.spotify.com/user/31rwxs2oxqodiuudyuzua24aobcq?si=debeeba9383b494d" 
              className="link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              [SPOTIFY]
            </a>
            <a 
              href="https://www.facebook.com/shazyar.sherzad" 
              className="link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              [FACEBOOK]
            </a>
            <a 
              href="https://linkedin.com/in/shaz-yar-1aa9502a9" 
              className="link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              [LINKEDIN]
            </a>
          </div>
        </div>

        <div className="footer">
          <p className="text">@ belongs to shazyar   <br /> understanding is the harshest gift</p>
        </div>
      </div>
    </div>
  )
}

export default App

