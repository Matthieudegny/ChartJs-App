import './home.css';

import image1 from '../../../public/picture1.png';
import logos from '../../../public/logos.png';



function Home() {

  return (

    <div className="home">

      <div className="home-main">

        <section className="home-description">
        <p>
        Mesurer et optimiser son <strong> impact environnemental </strong> en quelques clics.
        </p>
        <p>
        Nooco est une plateforme logicielle en ligne pour mesurer puis optimiser 
        l’impact environnemental des projets du bâtiment en agissant sur leurs 
        leviers les plus impactants.
        </p>
        </section>

        <section className="home-ContainerImage">
          <img src={image1} alt="" className="home-images-"/>
        </section>

      </div>

      <div className="home-ContainerLogos">
      <img src={logos} alt="" className="home-logos-"/>
      </div>
      
      
    </div>
  );
}

export default Home;
