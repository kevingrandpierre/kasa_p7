import Background from '../../Background.png';
import './banner.css';
function Banner() {
    return (
        <section className="banner">
            <div className="banner_content">
                <img src={Background} alt='paysage'/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
  );
}

export default Banner;