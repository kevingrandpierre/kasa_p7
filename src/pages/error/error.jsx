import { NavLink } from "react-router-dom";
import './error.css'
import Header from '../../components/header/header.jsx'

function Page404() {
    return (
        <div className='page_404'>
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to='/' className='link'>Retourner sur la page d’accueil</NavLink>
        </div>)
}

export default Page404;