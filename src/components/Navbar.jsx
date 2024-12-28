import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple logo" width={50} height={50} />
        <p id="hero" className="hero-titlee text-white" >
        Beebroz
        </p>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, i) => (
            <div
              key={i}
              className="px-5 text-sm cursor-pointer text-black  transition-all"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        
        <a href="https://wa.me/919633963434" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: 'green' }} />
      </a>

      {/* Mail */}
      <a href="mailto:beebrozknr@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: 'gray' }} />
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/beebroz_graphicz" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#E1306C' }} />
      </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
