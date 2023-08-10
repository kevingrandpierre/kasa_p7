import React , { useState, useEffect }from "react";
import './about.css'
import Header from '../../layouts/header/header.jsx'
import Banner from '../../layouts/banner/banner.jsx'
import Footer from "../../layouts/footer/footer";
import BackgroundAbout from "../../assets/images/BackgroundAbout.png";
import Collapse from "../../components/collapse/collapse";
import AboutData from "../../data/About.json";

function About() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        setAbout(AboutData);
    }, []);

    return (
        <>
            <main>
                <Header />
                <Banner className='bannerBackground_about' background={BackgroundAbout} />
                <div className='sectionAbout'>
                    {about.map((data) => (
                        <div className='collapseAbout' key={data.id}>
                            <Collapse key={data.id} title={data.title} content={data.body} />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}


export default About;