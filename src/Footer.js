import React from 'react';

function Footer() {
  return (
    <footer>
    <div className="top ">
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell medium-4  large-4">
            <h5>ABC Terapii Dziecka</h5>
            <p>Wychodząc naprzeciw wyzwaniom<br /> nowoczesnej&nbsp;rehabilitacji dziecięcej<br/>
             stworzyliśmy ośrodek, do&nbsp;którego Twoje<br/> dziecko wracać będzie&nbsp;z&nbsp;przyjemnością.</p>
          </div>
         
          <div className="cell medium-4 medium-text-left large-text-center large-4">
          <h5>Telefon</h5>
            <h6><a href="tel:607334050"> 607-33-40-50</a></h6>
            <a href="tel:607334050"><button style={{marginTop:'1rem'}} className="button hollow">zadzwoń</button></a>
          </div>
          <div className="cell medium-4 medium-text-left large-text-center large-4">
          <h5>Email</h5>
            <h6><a href="mailto:abcterapiidziecka@gmail.com">abcterapiidziecka@gmail.com</a></h6>
            <a href="mailto:abcterapiidziecka@gmail.com"><button style={{marginTop:'1rem', marginBottom:'1rem'}} className="button  hollow">napisz</button></a>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell text-center">
            <p>&copy; ABCterapiidziecka 2020</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
