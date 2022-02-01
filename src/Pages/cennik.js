import React from 'react';
import Section from '../Section'

function PriceList() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Section>
        <div className="cell text-center marginer" style={{height:"34vh"}}>
          <h4>ABC Terapii Dziecka s.c. Marta Dusińska, Przemysław Dusiński</h4>
          <h4>ul. Jesionowa 2,
              05-077 Warszawa-Wesoła
          </h4>
          <h6>Nr. rachunku bankowego:
              mBANK 52 1140 2004 0000 3102 8048 6518</h6>
        </div>
        </Section>
        <Section>
        <div className="cell medium-12 large-8 large-offset-2" style={{height:"33vh"}}>
          <h3>Cennik w trakcie przebudowy</h3>
          <h4>W razie pytań prosimy o kontakt telefoniczny:</h4>
          <h4><a href="tel:607334050"> 607-33-40-50</a></h4>
        </div>
      </Section>
   </div>
  );
}

export default PriceList;
