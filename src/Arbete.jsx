import React from "react";
import Arbeten from "./json/arbete.json"

function Arbete(){
	return(
		<main className="erfarenhet">
    <section className="content">
		<h1>Min arbetslivserfarenhet:</h1><br />
		<div className="skills">
            {Arbeten && Arbeten.map((arbeten) => {
                return (
                    <div key={arbeten.id}>
                        <h3>{arbeten.arbetsplats}:</h3>
                            <p>{arbeten.tjänst}</p>
                            <p>{arbeten.tid}</p><br />
                    </div>
                );
            })}
        </div>
    </section>
    </main>
	)
}

export default Arbete