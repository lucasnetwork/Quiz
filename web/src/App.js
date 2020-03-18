import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Quiz from './Components/Quiz'

import "./styles/App.css"
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {/* Temporario */}
        <Quiz text="Qual animal voce seria" tags={["animal"]}
          img="http://www.cbc.ca/natureofthings/content/images/episodes/foxtales_1920.jpg"
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;