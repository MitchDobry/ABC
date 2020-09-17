import React from 'react'
import Section from '../Section'


function Kontakt (){
return(
<>
    <Section>
        <div className="cell text-center">
            <h2>kontakt</h2>
        </div>
    </Section>
    <Section>
        <div style={{marginTop:'0'}} className="cell medium-offset-2 large-offset-3  medium-4 text-left">
            <h3>Telefon</h3>
            <h6>534 173 030</h6>
            <button className="button medium">
                <a href="tel:123-456-7890">
                    zadzwoń
                </a>
            </button>

        </div>
        <div style={{marginTop:'0'}} className="cell   medium-4 text-left">
            <h3>E-mail</h3>
            <a href="mailto:marta.dusinska@gmail.com"><h6>marta.dusinska@gmail.com</h6></a>
            <button  className="button medium">
                <a href="mailto:marta.dusinska@gmail.com">
                    napisz do nas
                </a>
            </button>
        </div>
        <div style={{marginTop:'0'}} className="cell medium-offset-2 large-offset-3 medium-4 text-left">
            <h3>Adres</h3>
            <h6>ul. Jesionowa 2</h6>
            <h6>05-077 Warszawa - Wesoła</h6>
            <button className="button medium">
                <a href="https://www.google.pl/maps/dir//ABC+Terapii+Dziecka,+Jesionowa+2,+05-077+Warszawa/@52.2153277,21.2241649,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ed40bb5454f59:0xd47e3577a32fe294!2m2!1d21.2263536!2d52.2153244!3e0" rel="noopener noreferrer" target="_blank">
                    znajdź nas
                </a>
            </button>
        </div>
        <div style={{marginTop:'0'}} className="cell medium-5 shedule">
            <h3>Godziny otwarcia</h3>
            <ul>
                <li>
                <h6>
                poniedziałek
                    15:00–19:00
                </h6>
                   
                </li>
                <li>
                <h6>
                    wtorek
                    15:00–19:00
                    </h6>
                </li>
                <li>
                <h6>
                    środa
                    15:00–19:00
                    </h6>
                </li>
                <li>
                <h6>
                    czwartek
                    15:00–19:00
                    </h6>
                </li>
                <li>
                <h6>
                    piątek
                    15:00–19:00
                    </h6>
                </li>
                <li>
                <h6>
                    sobota
                    08:00–14:00
                    </h6>
                </li>
                <li>
                <h6>
                    niedziela
                    Zamknięte
                    </h6>
                </li>
            </ul>
        </div>
    </Section>
</>
)
}

export default Kontakt;