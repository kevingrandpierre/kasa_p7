import './banner.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {

    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/about'){
            setAboutPage(true)
        };
    }, [])

    return (
        <section className={aboutPage ? 'bannerApropos' : 'banner'}>
            {!aboutPage && <p>Chez vous,<br /> partout et ailleurs</p>}
        </section>
    )
}

export default Banner;
