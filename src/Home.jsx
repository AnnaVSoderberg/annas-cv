import React,{ useState } from "react";
import bildAnna from "./images/bildAnna.jpg"
import erfarenhet from "./images/erfarenhet.jpg"



function Home(){

        const [bgColor, setBgColor] = useState("");      
        const imgClick = () => {
            setBgColor(bgColor === "rgb(20, 66, 105)" ? "" : "rgb(20, 66, 105)")
        };


	return(
		<main style={{ backgroundColor: bgColor }}>
		<section  id="firstsection">
		<section>
		<h1>Annas CV</h1>
		<p>Snart fullstackutvecklare med fokus på .NET</p>
			<div id="pic1">
				<h2>Välkommen till min webbsida</h2>
				<img className ='startpicture' src={bildAnna} alt="Bild på Anna Söderberg"/>
			</div>
			<div id="pic3">
				<img className ='startpicture' id="imgClick" src={erfarenhet} alt="Kugghjul som reprecenterar Erfarenhet" onClick = {imgClick}/>
			</div>
		</section>
	</section>
	</main>
	)
}

export default Home