import React, { useState, useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Logements from "../../data/logements.json";

function Card() {
    const [housing, setHousing] = useState([]); // Définir un état initial vide pour les logements

    useEffect(() => {
        setHousing(Logements); // Utiliser le fichier JSON 
    }, []);

    return (
        <>
            {housing.map((item) => {
                const { id, title, cover } = item;
                return (
                    <Link to={"housing/" + id} className="card" key={id}>
                        <img src={cover} alt="Appartement" className="card_img"></img>\
                        <div className="card_overlay">
                            <div className="card_title">{title}</div>
                        </div>

                    </Link>
                );
            })}
        </>
    );
}

export default Card;
