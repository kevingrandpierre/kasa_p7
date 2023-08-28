import React from "react";
import './home.css';
import Banner from '../../layouts/banner/banner.jsx';
import Card from "../../components/card/card";


function Home() {
    return (
        <>
            <main>
                <Banner />
                <section className='sectionHome'>
                    <Card />
                </section>
            </main>
        </>
    );
}

export default Home;
