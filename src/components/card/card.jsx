import React, { useState, useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Logements from "../../data/logements.json";

function Card() {
    const [housing, setHousing] = useState([]);

    useEffect(() => {
        try {
            setHousing(Logements);
        } catch (error) {
            console.error("Error loading housing data:", error);
        }
    }, []);

    return (
        <>
            {housing.length === 0 ? (
                <p>Il n'y a pas de logements à afficher pour le moment</p>
            ) : (
                housing.map((item) => {
                    const { id, title, cover } = item;
                    return (
                        <Link to={"housing/" + id} className="card" key={id}>
                            <img src={cover} alt="Apartment" className="card_img" />
                            <div className="card_overlay">
                                <div className="card_title">{title}</div>
                            </div>
                        </Link>
                    );
                })
            )}
        </>
    );
}

export default Card;
