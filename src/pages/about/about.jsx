import React from "react";
import './about.css'
import Header from '../../components/header/header.jsx'
import Banner from '../../components/banner/banner.jsx'
import Footer from "../../components/footer/footer";
import BackgroundAbout from "../../assets/images/BackgroundAbout.png";

function About() {
    return (
        <>
            <main>
                <Header />
                <Banner background={BackgroundAbout} />
                <section className="sectionAbout">
                    <div className="sectionAbout_title">À propos</div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default About;