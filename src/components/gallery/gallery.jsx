import React ,{ useState, useEffect } from "react";
import "./gallery.css";
import Card from "../card/card";


function Gallery() {
    const [apartments, setApartments] = useState([]);

    /*1 UsEffect [] just each time when loading the page*/
    useEffect(fetchApartments, []);
    /*2 json fetch + setApartments*/
    function fetchApartments() {
        fetch("database.json")
            .then((res) => res.json())
            .then((res) => setApartments(res))
            .catch(console.error);
    }
    return (
        /*3 map all apartments(array length 20 items) and retrieve props*/
        <div className= "Gallery">
            {apartments.map((apartment) => (
                <Card key={apartment.id} title={ apartment.title } imageUrl={ apartment.cover } id= {apartment.id}/>))}
        </div>
    );
}

export default Gallery