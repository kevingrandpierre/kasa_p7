import { Link } from "react-router-dom";
import './error.css'
import Header from '../../layouts/header/header.jsx'
import Footer from "../../layouts/footer/footer";

function Page404() {
    return (
        <>
            <Header />
            <div className='page_404'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='link'>Retourner sur la page d’accueil</Link>
        </div>
        <Footer />
        </>
    )

}

export default Page404;