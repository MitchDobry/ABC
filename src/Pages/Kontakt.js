import React from 'react'
import Section from '../Section'
// import GoogleApiWrapper from '../GoogleMap'

function Kontakt (){
    return(
        <>
            <Section>
                <div className="cell text-center">
                <h2>kontakt</h2>
                </div>
            </Section>
            <Section>
                <div className="cell medium-8 text-left">
                    <h3>abc terappii dziecka</h3>
                    <h6>ul. Jesionowa 2</h6>
                    <h6>05-077 Warszawa - Wesoła</h6>
                    <h6>Telefon: 534 173 030</h6>
                    <h6>Mail:<br/>
                        <a href="mailto:marta.dusinska@gmail.com">marta.dusinska@gmail.com</a>
                    </h6>
                </div>
            </Section>
        </>
    )
}

export default Kontakt;