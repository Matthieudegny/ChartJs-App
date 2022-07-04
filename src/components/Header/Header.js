import logoNooco from '../../public/logoNooco.png'
import './header.css';


function Header() {
  return (
    <div className="header">

      <img src={logoNooco} alt="logo-Nooco" className='header-logo'/>

      <h1>Accélérateur de réductions de l'empreinte carbone des lots techniques du bâtiment</h1>
      
    </div>
  );
}

export default Header;
