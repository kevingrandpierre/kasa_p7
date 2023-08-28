import { Link } from "react-router-dom";
import './error.css';

function Page404() {
    return (
        <>

            <div className='page_404'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='link'>Retourner sur la page d’accueil</Link>
        </div>

        </>
    )

}

export default Page404;