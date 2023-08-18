    import React ,{ useState, useEffect } from "react";
    import "./gallery.css";
    import Card from "../card/card";


    function Gallery() {
        const [apartments, setApartments] = useState([]);

        useEffect(fetchApartments, []);

        function fetchApartments() {
            // impossible de faire un fetch directement sur le site
            // on utilise donc un fichier json local
            fetch("database.json")
                .then((res) => res.json())
                .then((res) => setApartments(res))
                .catch(console.error);
        }
        return (
            <div className= "Gallery">
                {apartments.map((apartment) => (
                    <Card key={apartment.id} title={ apartment.title } imageUrl={ apartment.cover } id= {apartment.id}/>))}
            </div>
        );
    }

    export default Gallery