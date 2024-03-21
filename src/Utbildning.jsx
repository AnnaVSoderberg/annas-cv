import React from "react";
import Schools from "./json/utbildning.json";

function Utbildning() {
    return (
        <main>
        <section className="content">
            <h1>Mina Utbildningar:</h1><br />
            <div className="skills">
                {Schools && Schools.map((school) => {
                    return (
                        <div key={school.id}>
                            <h3>{school.skola}:</h3>
                            <br />
                            {school.utbildning && school.utbildning.map((utbild) => {
                                const uniqueKey = `${school.id}-${utbild.nr || ''}`;
                                return (
                                    <div key={uniqueKey}>
                                        {utbild.namn}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
        </main>
    );
}

export default Utbildning;



