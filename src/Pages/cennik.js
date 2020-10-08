import React from 'react';
import Section from '../Section'

function PriceList() {
  return (
    <>
      <Section>
        <div className="cell text-center marginer">
          <h2>Cennik</h2>
          <h6>Nr rachunku bankowego:
              BRE BANK 68 1140 2004 0000 3602 7404 7901</h6>
        </div>
        </Section>
        <Section>
        <div className="cell medium-12 large-8 large-offset-2">
                  <table >
            <thead className="text-left">
              <tr>
                <th width="300">Terapia</th>
                <th width="300">Czas</th>
                <th width="250">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rehabilitacja ruchowa dzieci i niemowląt</td>
                <td>45/60 min</td>
                <td>100/150 PLN</td>
              </tr>
              <tr>
                <td>Integracja sensoryczna</td>
                <td>45 min</td>
                <td>100 PLN</td>
              </tr>
              <tr>
                <td>Terapia logopedyczna</td>
                <td>45 min</td>
                <td>100PLN</td>
              </tr>
              <tr>
                <td>Funkcjonalna terapia ręki</td>
                <td>45 min</td>
                <td>100 PLN</td>
              </tr>
              <tr>
                <td>Plastrowanie (kinesiotaping)</td>
                <td>25 min</td>
                <td>30-50 PLN</td>
              </tr>
              <tr>
                <td>Terapia grupowa</td>
                <td>45 min</td>
                <td>przy 2 os. 50 PLN przy 3 os. 35pln</td>
              </tr>
              <tr>
                <td>Terapia metodą Therasuit</td>
                <td>5 dni / 2 godz. dziennie</td>
                <td>1200 PLN</td>
              </tr>
              <tr>
                <td>Terapia logopedyczna</td>
                <td>45 min</td>
                <td>100 PLN</td>
              </tr>
              <tr>
                <td>Rehabilitacja w domu pacjenta</td>
                <td>45 min</td>
                <td>od 130 PLN</td>
              </tr>
              <tr>
                <td>Badanie stóp oraz indywidualne dopasowanie termoplastycznych wkładek ortopedycznych ICB MEDICAL</td>
                <td>45 min</td>
                <td>300 PLN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <div className="cell medium-12 large-8 large-offset-2">
                  <table >
            <thead className="text-left">
              <tr>
                <th width="300">Diagnoza</th>
                <th width="300">Czas</th>
                <th width="250">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Diagnostyka fizjoterapeutyczna </td>
                <td>60 min</td>
                <td>130 PLN</td>
              </tr>
              <tr>
                <td>Diagnostyka logopedyczna </td>
                <td>60 min</td>
                <td>130 PLN</td>
              </tr>
              <tr>
                <td>Diagnoza integracji sensorycznej (SI) z wydaniem pisemnej opinii o dziecku</td>
                <td>3 spotkania</td>
                <td>380PLN</td>
              </tr>
              <tr>
                <td>Diagnoza psychologiczna z wydaniem pisemnej opinii o dziecku</td>
                <td>2x45 min</td>
                <td>380 PLN</td>
              </tr>
              <tr>
                <td>Wydanie pisemnej opinii / przygotowanie zaświadczenia / przygotowanie zestawu ćwiczeń domowych</td>
                <td>30 min</td>
                <td>100 PLN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <div className="cell medium-12 large-8 large-offset-2">
                  <table >
            <thead className="text-left">
              <tr>
                <th width="300">PAKIETY 4-tygodniowe (płatne z góry) </th>
                <th width="300">Czas</th>
                <th width="250">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 x terapia indywidualna</td>
                <td>tydzień</td>
                <td>720 zł (8 terapii x 90zł)</td>
              </tr>
              <tr>
                <td>3 x terapia indywidualna</td>
                <td>tydzień </td>
                <td>1080 zł (12 terapii x 90zł)</td>
              </tr>
             
            </tbody>
          </table>
          <h6 className="subheader">Pakiety nie dotyczą rehabilitacji niemowląt oraz osób dorosłych.</h6>
        </div>
      </Section>
   </>
  );
}

export default PriceList;
