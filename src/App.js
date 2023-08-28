import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Home from "./pages/home/home";
import Housing from "./pages/housing/housing";
import About from "./pages/about/about";
import Page404 from "./pages/error/error";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
