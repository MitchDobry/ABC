import React from 'react';
import Section from '../Section'
import $ from "jquery";
import { Accordion } from "foundation-sites";

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
          <div className="cell text-center">
            <h2>nasi terapeuci</h2>
          </div>
        </Section>
       
        <Section>
        <div className="cell small-12 medium-3 medium-offset-1">
          <img className="staff-photo" alt="staff"></img>
        </div>
        <div className="cell small-12 medium-7">
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
        <div className="cell small-12 medium-3 medium-offset-1">
          <img className="staff-photo" alt="staff"></img>
        </div>
        <div className="cell small-12 medium-7">
            <h3>Sylwia Gilewska - Matysiak</h3>
            <h6 >
            Jestem absolwentką Szkoły Wyższej Psychologii Społecznej (obecnie Uniwersytet SWPS) na kierunku
            Społeczna Psychologia Kliniczna oraz studiów podyplomowych Diagnoza kliniczna dziecka i jego
            rodziny na Uniwersytecie Warszawskim.
            </h6>
            <p>
            Od kilku lat jestem związana z edukacją, pracowałam z dziećmi w przedszkolach, gimnazjum, a
            aktualnie pracuję w szkole podstawowej.
            Profil moich zawodowych zainteresowań jest dość szeroki. Pracuję z dziećmi indywidualnie oraz
            grupowo, prowadząc terapie oraz warsztaty i treningi.
            Od kilku lat prowadzę zajęcia dla dzieci w wieku przedszkolnym i wczesnoszkolnym rozwijające
            kompetencje emocjonalno-społeczne „Dziecko w świecie emocji”, które są moim autorskim
            pomysłem.
            </p>
            <p>
            Praca z dziećmi i młodzieżą jest dla mnie wciąż nowym wyzwanie, ale też ogromną frajdą.
            Jestem ciekawa każdego małego i dużego pacjenta.
            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                <ul>
                  <li>02.2018 Diagnoza „Skala Stanford Binet”</li>
                  <li>10.2017 Organizacja systemu pomocy psychologiczno-pedagogicznej</li>
                  <li>11.2017 TUS Terapia grupowa dla dzieci ze spektrum autyzmu</li>
                  <li>09.2015 Stosowanie i interpretacja Skal Inteligencji i Rozwoju dla Dzieci</li>
                  <li>11.2015 Szkolenie dla asystentów osób ze spektrum autyzmu, Stowarzyszenie Po-Mocni</li>
                </ul>
                </div>
              </li>
          </ul>
          
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-3 medium-offset-1">
          <img className="staff-photo" alt="staff"></img>
        </div>
        <div className="cell small-12 medium-7">
            <h3>Aleksandra Ciesielska</h3>
            <h6 >
            Jestem absolwentką studiów magisterskich na kierunku pedagogika specjalna, specjalność: logopedia na Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie. Doświadczenie zawodowe zdobywałam odbywając liczne praktyki w placówkach oświatowych i medycznych oraz pracując jako logopeda w przedszkolach publicznych.
            </h6>
            <p>
            Terapię z dziećmi prowadzę w sposób kreatywny i wesoły dostosowując ją do zainteresowań i możliwości pacjentów. Celem moich działań jest rozbudzenie w dzieciach chęci do komunikacji na możliwym dla nich poziomie.
            </p>
            <ul className="accordion" data-accordion data-allow-all-closed>
              <li className="accordion-item" data-accordion-item >
                <a href="#" className="accordion-title">
                <h5>kursy i szkolenia</h5>
                </a>
                <div className="accordion-content" data-tab-content>
                <ul>
                  <li>Roczny staż logopedyczny w Fundacji SYNAPSIS</li>
                  <li>„Podstawowe zagadnienia terapii i edukacji dzieci z autyzmem"</li>
                  <li>„AAC. Wspomagające i alternatywne sposoby porozumiewania się – 1 i 2 stopień</li>
                  <li>„Makaton stopień I”</li>
                  <li>"Masaż logopedyczny"</li>
                  <li>"Wczesna diagnoza i stymulacja logopedyczna noworodków i niemowląt"</li>
                </ul>
                </div>
              </li>
          </ul>
          
        </div>
      </Section>
      <Section>
      <div className="cell small-12 medium-3 medium-offset-1">
          <img className="staff-photo" alt="staff"></img>
        </div>
        <div className="cell small-12 medium-7">
            <h3>Aleksandra Ciesielska</h3>
            <h6 >
              Jestem magistrem fizjoterapii, absolwentką Wyższej Szkoły Rehabilitacji oraz terapeutą SI, absolwentką studiów podyplomowych Wyższej Szkoły Pedagogiki i Administracji. 
              Pracę z dziećmi rozpoczęłam w 2017 roku, jako fizjoterapeuta, od 2018 również jako terapeuta SI. 
            </h6>
            <p>
              Pracuję z dziećmi z różnymi zaburzeniami – neurologicznymi, ortopedycznymi, z wadami genetycznymi, zespołem Aspergera,  autyzmem i zespołem Downa. 
              Doświadczenie zawodowe w zakresie rehabilitacji zdobywałam dzięki licznym praktykom oraz jako wolontariusz na obozach dla dzieci niepełnosprawnych. 
              Praca z dziećmi daje mi dużą satysfakcję. Zajęcia prowadzę w sposób kreatywny dostosowując ćwiczenia do potrzeb małych pacjentów. 
            </p>
        </div>
      </Section>
      <Section>
        <div className="cell small-12 medium-3 medium-offset-1">
          <img className="staff-photo" alt="staff"></img>
        </div>
        <div className="cell small-12 medium-7">
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
      </>
   );
 }
}

export default Staff;
