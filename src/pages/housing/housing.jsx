import React from "react";
import { useParams } from "react-router-dom";
import './housing.css';
import Logements from "../../data/logements.json";
import Error from "../error/error";
import Carousel from "../../components/carousel/carousel";
import Rating from "../../components/rating/rating";
import Tags from "../../components/tags/tags";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/host/host";

function Housing() {
    const id = useParams();
    const Logement = Logements.find(logement => logement.id === id.id);
    if ( Logement === undefined ) {
        return <Error />
    }
    return (
         <>

            <main>
                <section className='sectionHousing'>
                    <Carousel pictures={Logement.pictures} />
                    <div className='housing'>
                        <div className="description_housing">
                            <div className='housing_desc'>
                            <div className='housing_location'>{Logement.location}
                                <div className='housing_title'>
                                    {Logement.title}
                                </div>
                            </div>
                            <div className='housing_tags'>
                                <Tags tags={Logement.tags} />
                            </div>
                            </div>

                            <div className='housing_host'>
                                <Host host={Logement.host} /><br/>
                                <Rating rating={Logement.rating} />
                            </div>
                        </div>

                        <div className='housing_content'>
                            <div className='housing_collapse'>
                                <Collapse title='Description' content={Logement.description} />
                                <Collapse title='Equipements' content={Logement.equipments} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
             
        </>
    );
}
export default Housing;