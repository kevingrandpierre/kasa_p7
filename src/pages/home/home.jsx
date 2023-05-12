import React from "react";
import './home.css'
import Header from '../../layouts/header/header.jsx'
import Banner from '../../layouts/banner/banner.jsx'
import Background from '../../assets/images/Background.png'
import Footer from "../../layouts/footer/footer";
import Card from "../../components/card/card";


function Home() {
    return (
        <>
            <main>
                <Header />
                <Banner background={Background} content='Chez vous, partout et ailleurs'/>
                <section className='sectionHome'>
                    <Card />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
