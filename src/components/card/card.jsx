import React, { useState, useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json"; // Importer le fichier JSON

function Card() {
    const [housing, setHousing] = useState([]); // Définir un état initial vide pour les logements

    useEffect(() => {
        setHousing(logements); // Utiliser le fichier JSON dans l'état housing
    }, []);

    return (
        <>
            {housing.map((item) => {
                const { id, title, cover } = item;
                return (
                    <Link to={"housing/" + id} className="card" key={id}>
                        <img src={cover} alt="Appartement" className="card_img"></img>
                        <div className="card_title">{title}</div>
                    </Link>
                );
            })}
        </>
    );
}

export default Card;
