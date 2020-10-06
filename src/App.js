import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import Section from './Section'

import Staff from './Pages/Staff'
import Terapie from './Pages/Terapie'
import PriceList from './Pages/PriceList'
import Regulamin from './Pages/Regulamin'
import Kontakt from './Pages/Kontakt'
import local from './Assets/local.jpg'

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
              <Route path="/staff" component={Staff} />
              <Route path="/pricelist" component={PriceList} />
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
          <button  className="button large">
           <a href="tel:607334050">
           zadzwoń
           </a> 
          </button>
      </div>
      <div className="cell medium-6 right">
      </div>
    </div>
  </div>
  </div>
  </header>
  <div style={{marginBottom:'0', paddingBottom:'0', backgroundColor: 'white'}} className="cell text-center">
      <h3>o nas</h3>
    </div>
  <Section>
    <div className="cell medium-12 large-6">
      <h3>Nowoczesy  ośrodek terapii
      dziecięcej</h3>
      <h6>
      Indywidualne podejście, kreatywność terapeutów,
      specjalnie zaadaptowane sale oraz przemyślany program ćwiczeń
      da Państwu satysfakcję i przekonanie, że podjęliście właściwą
      decyzję wybierając naszą ofertę.<br></br> <strong>ABC terapii dziecka</strong> to miejsce
      dla Ciebie i Twojej pociechy. 
      </h6>
    <button style={{marginTop:'2rem'}}  className="button large">
        <a href="mailto:abcterapiidziecka@gmail.com">
          napisz do nas
        </a> 
      </button>
    </div>
    <div className="cell medium-12 large-6 text-right">
          <img src={local} alt='zdjęcie ośrodka'></img>
      </div>
  </Section>
 
</div>
)

export default App;
