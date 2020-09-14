import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import Section from './Section'

import Staff from './Pages/Staff'
import Terapie from './Pages/Terapie'
import PriceList from './Pages/PriceList'
import Regulamin from './Pages/Regulamin'
import Kontakt from './Pages/Kontakt'

import Bg from './Assets/bg.jpg'
import './App.scss';


function App() {
  return (
    <Router>
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
    <div className="grid-x grid-padding-x grid-margin-x align-middle">
      <div className="cell hide">
        <h1>ABC Terapii Dziecka</h1>
      </div>
      <div className="cell medium-6 left ">
        <div className="logos"><h2>ABC</h2></div>
        <h4>Terapie dziecięce <br/>w Starej Miłosnej</h4>
          <div  className="button">
           <a href="tel:123-456-7890">
           <h5>zadzwoń</h5>
           </a> 
          </div>
      </div>
      <div className="cell medium-6 right">
          {/* <img src={Bg}></img> */}
      </div>
    </div>
  </div>
  </div>
  </header>
  <Section>
  <div className="cell small-12 medium-5">
                    <h3>Nowoczesy  ośrodek terapii
                    dziecięcej</h3>
                    <p>
                    Indywidualne podejście, kreatywność terapeutów,
                    specjalnie zaadaptowane sale oraz przemyślany program ćwiczeń
                    da Państwu satysfakcję i przekonanie, że podjęliście właściwą
                    decyzję wybierając naszą ofertę.<br></br> <strong>ABC TERAPII DZIECKA</strong> to miejsce
                    dla Ciebie i Twojej pociechy. 

                    </p>
                    <h6 className="subheader">mgr Marta Dusińska</h6>
                    <h5>Przekonaj się już teraz!</h5>
                    <div  className="button">
                      <a href="mailto:marta.dusinska@gmail.com">
                        <h5>napisz</h5>
                      </a> 
                    </div>
                  </div>
                  <div className="cell small-12 medium-6">
                    <img src={Bg} alt="Ośrodek rehabilitacji"></img>
                  </div>
  </Section>
</div>
)

export default App;
