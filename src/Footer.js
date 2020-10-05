import React from 'react';

function Footer() {
  return (
    <footer>
    <div className="top ">
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell medium-6 large-offset-2  large-3">
            <h5>ABC Terapii Dziecka</h5>
            <p>Wychodząc naprzeciw wyzwaniom nowoczesnej rehabilitacji dziecięcej<br/>
             stworzyliśmy ośrodek, do którego Twoje dziecko wracać będzie&nbsp;z&nbsp;przyjemnością.</p>
          </div>
          <div className="cell large-offset-1 medium-6 medium-text-left large-6">
          <h5>Kontakt</h5>
            <h6>E-mail: <a href="mailto:abcterapiidziecka@gmail.com">abcterapiidziecka@gmail.com</a></h6>
            <button style={{marginTop:'1rem', marginBottom:'1rem'}} className="button  hollow"><a href="mailto:abcterapiidziecka@gmail.com">napisz</a></button>
            <h6>Telefon:  <a href="tel:607334050"> +48 607-33-40-50</a></h6>
            <button style={{marginTop:'1rem'}} className="button hollow"><a href="tel:607334050">zadzwoń</a></button>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell small-12 text-center">
            <p>&copy; ABCterapiidziecka 2020 by Dobry</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
