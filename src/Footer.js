import React from 'react';

function Footer() {
  return (
    <footer>
    <div className="top text-center large-text-left">
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell large-4">
            <h5>ABC Terapii Dziecka</h5>
            <p>Wychodząc naprzeciw wyzwaniom nowoczesnej rehabilitacji dziecięcej<br/>
             stworzyliśmy ośrodek, do którego Twoje dziecko wracać będzie&nbsp;z&nbsp;przyjemnością.</p>
          </div>
          {/* <div className="cell large-3">
            <h5>Mapa strony</h5>
            <ul>
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Strona główna</Link>
              </li>
              <li>
                <Link to="/#onas">O nas</Link>
              </li>
              <li>
                <Link to="/#zlec">Zleć</Link>
              </li>
              <li>
                <Link to="/#rekrutacja">Oferty pracy</Link>
              </li>
              <li>
                <Link to="/dolacz/" onClick={() => window.scrollTo(0, 0)}>Dołącz</Link>
              </li>
              <li>
                <Link to="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div> */}
          <div className="cell large-offset-1 large-4">
          <h5>Kontakt</h5>
            <p>Mail:<br/>
              <a href="mailto:marta.dusinska@gmail.com">marta.dusinska@gmail.com</a>
            </p>
            {/* <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F360digitalnatives%2F&tabs&width=300&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" style={{border:'none',overflow:'hidden'}} width="300" height="130" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe> */}
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
          {/* <div className="cell large-6 align-right">
            <ul className="menu align-right">
              <li>
                <Link to="/polityka-prywatnosci" onClick={() => window.scrollTo(0, 0)}>Polityka Prywatności</Link>
              </li>
              <li>
                <Link to="/polityka-cookies" onClick={() => window.scrollTo(0, 0)}>Polityka Cookies</Link>
              </li>
              <li>
                <Link to="/regulamin" onClick={() => window.scrollTo(0, 0)}>Regulamin</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
