import React, { useState, useEffect } from "react";

function Modal() {

    const [showModal, setShowModal] = useState(false);

    const [typedKeys, setTypedKeys] = useState("");

    const handleCloseClick = () => {
    setShowModal(false);
    };

    const handleKeyPress = (event) => {

    setTypedKeys((prevTypedKeys) => prevTypedKeys + event.key);
    };

    useEffect(() => {
        if (typedKeys.slice(-4) === "1337") {
            setShowModal(true);
            setTypedKeys(""); 
    }
    }, [typedKeys]);


    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); 
    if (!showModal) return null;
    return (
    <div className="modalPopUp">
        <a href="#" className="close-button" id="close-btn" onClick={handleCloseClick}>
            &#10006; 
        </a>
        <p>Why do JavaScript developers wear glasses? </p><br/>
        <p>Because they don't C#!</p>
    </div>
    );
}

export default Modal; 