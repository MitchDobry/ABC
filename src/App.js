import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import Section from './Section'

import pracownicy from './Pages/pracownicy'
import Terapie from './Pages/Terapie'
import cennik from './Pages/cennik'
import Regulamin from './Pages/Regulamin'
import Kontakt from './Pages/Kontakt'
import local from './Assets/localfront.jpg'

import Logo from './Assets/logo.svg'
import './App.scss';


function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Nav />
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/terapie" component={Terapie} />
              <Route path="/pracownicy" component={pracownicy} />
              <Route path="/cennik" component={cennik} />
              <Route path="/kontakt" component={Kontakt} />
              <Route path="/regulamin" component={Regulamin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
  <header>
  <div className="bg">
  <div className="grid-container">
    <div className="grid-x grid-padding-x grid-margin-x grid-padding-y align-middle">
      <div className="cell hide">
        <h1>ABC Terapii Dziecka</h1>
      </div>
      <div className="cell medium-6 left ">
        <div className="logos"><img src={Logo} alt='ABC Terapii Dziecka logo'/></div>
        <h1>Terapie dziecięce <br/>w Warszawie - Wesoła<br/></h1>
        <a href="tel:607334050">
          <button  className="button large">
           zadzwoń
          </button>
          </a> 
      </div>
      <div className="cell medium-6 right">
      </div>
    </div>
  </div>
  </div>
  </header>
  <div style={{marginBottom:'0', paddingBottom:'0', backgroundColor: 'white', marginTop:'2rem'}} className="cell text-center">
      <h2>o nas</h2>
    </div>
  <Section>
    <div className="cell medium-12 large-6">
      <h3>Nowoczesy  ośrodek terapii
      dziecięcej</h3>
      <h4 style={{color:'black', textTransform:'none', fontSize:'1.2rem'}}>
      Indywidualne podejście, kreatywność terapeutów,
      specjalnie zaadaptowane sale oraz&nbsp;przemyślany program ćwiczeń
      da&nbsp;Państwu satysfakcję i przekonanie, że&nbsp;podjęliście właściwą
      decyzję wybierając naszą ofertę.<br></br> <strong>ABC Terapii Dziecka</strong> to&nbsp;miejsce
      dla Ciebie i&nbsp;Twojej&nbsp;pociechy. 
      </h4>
      <a href="mailto:abcterapiidziecka@gmail.com">
    <button style={{marginTop:'2rem'}}  className="button large">
       
          napisz do nas
        
      </button>
      </a> 
    </div>
    <div className="cell medium-12 large-6 text-right">
          <img src={local} alt='zdjęcie ośrodka'></img>
      </div>
  </Section>
 
</div>
)

export default App;
