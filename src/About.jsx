import React from "react";
import bildAnna from "./images/bildAnna.jpg"





function About(){
	return(
        <main>
        <section>
            <div className="containermig">
                <img className="imgmig" src={bildAnna} alt="Bild på Anna Söderberg"/>
                <div className="textmig">
                <h1>Detta är info om mig</h1>
                    <p>
                        Jag är en nyexaminerad och entusiastisk individ med en stark passion för att påbörja min karriär inom systemutveckling. Med en nyligen avslutad examen i systemutveckling .NET och en önskan att lära och utvecklas, är jag redo att anta nya utmaningar och bidra till framgång i arbetslivet. 
                    </p>
                    <p>
                        Min utbildning har gett mig en solid grund inom systemutveckling, och jag är ivrig att tillämpa denna kunskap i praktiken. Jag är övertygad om att min entusiasm och min vilja att lära kommer att göra mig till en värdefull tillgång för vilket team eller företag jag får möjlighet att arbeta med.
                        Som nyexaminerad har jag en öppenhet och flexibilitet för att utforska olika möjligheter och växa i olika roller och miljöer. Jag är redo att ta itu med utmaningar med en positiv inställning och se dem som möjligheter till personlig och professionell tillväxt.
                    </p>
                    <p>Jag är särskilt intresserad av databaser och SQL, och jag är övertygad om att min passion och engagemang kommer att bidra till att driva framgång och innovation i min framtida karriär.
                        
                    </p>
                    <p>
                        Jag ser fram emot att utforska möjligheter till samarbete och lära känna nya människor och idéer. Tveka inte att kontakta mig om du är intresserad av att diskutera möjligheter till samarbete eller om du har några frågor.
                    </p>
                </div>
            </div>
        </section>
    </main>
	)
}

export default About