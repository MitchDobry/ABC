import React from 'react'
import Section from '../Section'

function Kontakt (){
return(
<>
    <Section>
        <div className="cell text-center marginer">
            <h2>kontakt</h2>
        </div>
        <div style={{marginTop:'0'}} className="cell text-center medium-4  ">
            <h4>Adres</h4>
            <button className="button small button-contact">
                <a href="https://www.google.pl/maps/dir//ABC+Terapii+Dziecka,+Jesionowa+2,+05-077+Warszawa/@52.2153277,21.2241649,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x471ed40bb5454f59:0xd47e3577a32fe294!2m2!1d21.2263536!2d52.2153244!3e0" rel="noopener noreferrer" target="_blank">
                    znajdź nas
                </a>
            </button>
            <h5>Warszawa - Wesoła <br/>05-077 </h5>
            <h5>ul. Jesionowa 2</h5>
           
        </div>
        <div style={{marginTop:'0'}} className="cell text-center medium-4 ">
            <h4>E-mail</h4>
            <button  className="button small button-contact">
                <a href="mailto:marta.dusinska@gmail.com">
                    napisz do nas
                </a>
            </button>
            <a href="mailto:abcterapiidziecka@gmail.com"><h6>abcterapiidziecka@gmail.com</h6></a>
           
        </div>
        <div style={{marginTop:'0'}} className="cell text-center  medium-4 ">
        <h4>Telefon</h4>
        <button className="button small button-contact">
                <a href="tel:607334050">
                    zadzwoń
                </a>
            </button>
           <h5><a href="tel:607334050"> +48 607-33-40-50</a></h5> 

        </div>
        <div className="cell medium-4">
        <table>
                <thead className="text-left">
                <tr>
                    <th width="150">Dzień</th>
                    <th width="150">Godziny otwarcia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Poniedziałek</td>
                    <td>8:00-19:00</td>
                </tr>
                <tr>
                    <td>Wtorek</td>
                    <td>8:00 -19:00</td>
                </tr>
                <tr>
                    <td>Środa</td>
                    <td>8:00 -19:00</td>
                </tr>
                <tr>
                    <td>Czawartek</td>
                    <td>8:00 -19:00</td>
                </tr>
                <tr>
                    <td>Piątek</td>
                    <td>8:00 -19:00</td>
                </tr>
                <tr>
                <td>Sobota</td>
                <td>8:00 -14:00</td>
                </tr>
                <tr>
                <td>Niedziela</td>
                    <td>Zamknięte</td>
                </tr>
                </tbody>
                
            </table>
        </div>
        <iframe title="Mapa do ABC Terapii Dziecka" className="cell medium-7 mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5443325152414!2d21.224164916351445!3d52.21532766651486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed40bb5454f59%3A0xd47e3577a32fe294!2sABC%20Terapii%20Dziecka!5e0!3m2!1spl!2spl!4v1600361116629!5m2!1spl!2spl"
        style={{
            height:"800",
            frameborder:"0",
            allowfullscreen:"",
            ariahidden:"false",
            tabindex:"0"
        }}
        >
        </iframe>
    </Section>
</>
)
}

export default Kontakt;