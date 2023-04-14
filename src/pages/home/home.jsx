import React from "react";
import './home.css'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import Banner from '../../components/banner/banner.jsx'

function Home() {
    return (
        <main>
            <Header />
            <Banner />
            <Footer />
        </main>
    );
}

export default Home;