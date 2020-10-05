import React from 'react';
import Section from '../Section'
import $ from "jquery";
import { Accordion } from "foundation-sites";
import Marta from '../Assets/marta.jpg'
import Agnieszka from '../Assets/agnieszka.jpg'
import ola from '../Assets/Olaciesielska.jpg'
import martaf from '../Assets/martf.jpg'

class Staff extends React.Component {
  componentDidMount() {
    new Accordion($(".accordion"), {
      slideSpeed: 500,
      multiExpand: true
    });
}
  render (){
    return (
      <>
        <Section>
          <div className="cell text-center marginer">
            <h2>nasi terapeuci</h2>
          </div>
        </Section>
       
        <Section>
        <div className="cell medium-5 large-4  text-center">
          <img className="staff-photo" alt="staff" src={Marta}></img>
        </div>
        <div className="cell medium-7">
            <h3>Marta Dusińska</h3>
            <h6 >
            Profesjonalną rehabilitacją zajmuję się od 2004 r. Jestem osobą piekielnie aktywną zawodowo. Uwielbiam pracę z dziećmi. Rzadko zdarza się połączyć pasję z pracą. Mi się to udało.
            </h6>
            <p>
            Ukończyłam fizjoterapię na Akademii Medycznej w Warszawie.
             W toku studiów odbyłam szereg dodatkowych szkoleń.
              Pracowałam z dziećmi z różnymi zaburzeniami – zarówno neurologicznymi jak i ortopedycznymi.
              Obecnie&nbsp;pracuję jako fizjoterapeuta i&nbsp;terapeuta integracji sensorycznej w Mazowieckim Centrum&nbsp;Neurorehabilitacji&nbsp;i&nbsp;Psychiatrii w Zagórzu k/ Warszawy.
            </p>
            <p>
            Moim celem jest spełnianie marzeń w granicach ich możliwości. Wkładam całe serce w każde, nawet najprostsze ćwiczenie, ale w zamian oczekuję zaangażowania ze strony dzieci  i rodziców.
            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                  <ul>
                    <li>08. 2011 – Kinesiobalance</li>
                    <li>06. 2011 – Thera Suit Method</li>
                    <li>05. 2011 – Kwalifikacyjny kurs pedagogiczny</li>
                    <li>04. 2011 – Integracja Sensoryczna II stopień</li>
                    <li>05. 2010 – Taping Rehabilitacyjny</li>
                </ul>
                </div>
              </li>
          </ul>
          
        </div>
      </Section>
      <Section>
        <div className="cell medium-5 large-4  text-center">
          <img className="staff-photo" src={ola} alt="Aleksandra Ciesielska"></img>
        </div>
        <div className="cell medium-7">
            <h3>Aleksandra Ciesielska</h3>
            <h6 >
            
Jestem absolwentką studiów na kierunku pedagogika specjalna o specjalności logopedia na Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie. Obecnie kontynuuję naukę na podyplomowych studiach z zakresu neurologopedii i wczesnego wspomagania rozwoju dziecka w Centrum Kształcenia Podyplomowego Uczelni Łazarskiego. Doświadczenie zawodowe zdobywałam odbywając liczne praktyki oraz pracując jako logopeda w placówkach oświatowych i medycznych.
            </h6>
            <p>
            Zajmuję się terapią dzieci z różnorakimi zaburzeniami mowy i komunikacji. W kręgu moich zainteresowań zawodowych szczególne miejsce zajmuje komunikacja alternatywna oraz terapia karmienia. 

Z każdym podopiecznym staram się zbudować więź opartą na wzajemnym zrozumieniu i zaufaniu, dzięki której uda się nam wspólnie osiągnąć jak najlepsze efekty. Zajęcia staram się prowadzić w sposób kreatywny dostosowując zadania do możliwości i zainteresowań pacjentów.  

            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                <ul>
                  <li>Jedzenie doustne wyzwaniem dla dzieci karmionych alternatywnie</li>
                  <li>Akademia Terapeuty Karmienia</li>
                  <li>Badanie logopedyczne dzieci w wieku 2-8 lat</li>
                  <li>AAC. Wspomagające i alternatywne sposoby porozumiewania się – 1 i 2 stopień</li>
                  <li>Makaton stopień I</li>
                  <li>Masaż logopedyczny</li>
                  <li>Wczesna diagnoza i stymulacja logopedyczna noworodków i niemowląt</li>
                  <li>Roczny staż logopedyczny w Fundacji SYNAPSIS</li>
                  <li>Podstawowe zagadnienia terapii i edukacji dzieci z autyzmem</li>
                </ul>
                </div>
              </li>
          </ul>
          
        </div>
      </Section>
      <Section>
        <div className="cell medium-5 large-4  text-center text-center">
          <img className="staff-photo" alt="staff" src={Agnieszka}></img>
        </div>
        <div className="cell medium-7">
            <h3>Agnieszka Czarnecka</h3>
            <h6 >
              Z wykształcenia jestem pedagogiem specjalnym, wiedzę i praktykę zdobywałam na Akademii Pedagogiki Specjalnej w Warszawie. Z dziećmi niepełnosprawnymi pracuję od 8 lat. W pracy kieruję się dobrem dzieci, staram się dostrzec ich problemy i dostosować terapię do ich potrzeb.
            </h6>
            <p>
              Celem prowadzonych przeze mnie zajęć jest usprawnianie małej motoryki, czyli precyzyjnych ruchów dłoni i palców jak i dostarczanie wrażeń dotykowych.
              Są to ćwiczenia i zabawy mające rozwinąć sprawność ruchową ręki dziecka, umiejętności chwytu, czynności manipulacyjnych, koordynację między kończynami, co przekłada się na opanowanie i doskonalenie czynności samoobsługowych, a w późniejszym okresie techniki pisania.
              Kiedy mamy sprawne ręce jesteśmy w stanie wykonać większość czynności wokół siebie co sprawia że jesteśmy bardziej niezależni, a to z kolei przekłada się na możliwość uczestniczenia w pełni w życiu społecznym.
            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                <ul>
                  <li>Akademia Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie Specjalność: pedagogika niepełnosprawnych intelektualnie i terapia pedagogiczna</li>
                  <li>Kurs dla instruktorów terapii zajęciowej</li>
                  <li>Terapia ręki</li>
                  <li>Kinezjologia edukacyjna wg Paula Dennisona</li>
                  <li>Szkolenie z obsługi urządzenia do reedukacji funkcji ręki „ARMEO”</li>
                  <li>Konferencja „Leczenie i rehabilitacja w ortopedii i neurologii –studium przypadków</li>
                  <li>Kurs medyczny, „Postępy w terapii i rehabilitacji dzieci z MPD</li>
                  <li>Kurs medyczny, „Postępy w terapii i rehabilitacji dzieci z MPD</li>
                  <li>Model Zintegrowanego Wsparcia będącego modyfikacją Systemu Nauczania Kierowanego oraz z zakresu ICF i metod Alternatywnej Komunikacji AAC</li>
                </ul>
                </div>
              </li>
          </ul>
        </div>
      </Section>
      <Section>
        <div className="cell medium-5 large-4  text-center">
          <img className="staff-photo" alt="Marta Filewska" src={martaf}></img>
        </div>
        <div className="cell medium-7">
            <h3>Marta Filewska</h3>
            <h6 >
            Jestem magistrem fizjoterapii, absolwentką Wyższej Szkoły Rehabilitacji oraz terapeutą SI,
absolwentką studiów podyplomowych WSPiA. 
Pracę z dziećmi rozpoczęłam w 2017 roku, jako fizjoterapeuta, od 2018 również jako
terapeuta SI. Ciągle dążę do podnoszenia swoich kwalifikacji zawodowych. Obecnie jestem
na studiach podyplomowych z zakresu Przygotowania Pedagogicznego oraz
Oligofrenopedagogiki.
            </h6>
            <p>
           
Pracuję z dziećmi z różnymi zaburzeniami – ortopedycznymi , neurologicznymi, z wadami
genetycznymi, zespołem Aspergera,  autyzmem i zespołem Downa. 
Doświadczenie zawodowe w zakresie rehabilitacji zdobywałam dzięki licznym praktykom
oraz jako wolontariusz na obozach dla dzieci niepełnosprawnych. 
Praca z dziećmi daje mi dużą satysfakcję. Zajęcia prowadzę w sposób kreatywny
dostosowując ćwiczenia do potrzeb małych pacjentów. 
            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                <ul>
                  <li>Trójpłaszczyznowa, manualna terapia stóp na podstawach neurofizjologicznych wg Barbary
Zukunft-Huber</li>
                </ul>
                </div>
              </li>
          </ul>
          
        </div>
      </Section>
      </>
   );
 }
}

export default Staff;
