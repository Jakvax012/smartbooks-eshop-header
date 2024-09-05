import { useRef } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';
import "../styles/style-header.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="top-bar">
                <div className="content">
                    <div>
                        <a href="tel:+420 777 444  063 " className="phone-number-top-menu"><FaPhone/> +420 777 444  063 </a>
                        <a href="mailto:hotline@smartbooks.sk" className="mobile-hidden"><FaEnvelope/> hotline@smartbooks.sk</a>
                    </div>
                    <div>
                        <a href="https://ucenie.smartbooks.sk/" className="mobile-hidden"><FaUser/> prihlásiť / registrovať sa</a>
                    </div>
                </div>
            </div>
            <div className="main-bar">
                <div className="content">
                    <a href='https://www.smartbooks.sk/' className='logo-header-link'>
                        <img 
                        src='https://www.smartbooks.sk/wp-content/uploads/2024/09/logo-new-1536x330-1.png'
                        alt='Logo smartbooks.sk'
                        className='logo-header'/>
                    </a>
                    <nav ref={navRef}>
                        <a href="https://www.smartbooks.sk/rodicia/">Pre rodičov</a>
                        <a href="https://www.smartbooks.sk/ucitelia/">Pre školy</a>
                        <a href="https://www.smartbooks.sk/co-je-to-smartbooks/">Čo je to Smartbooks</a>
                        <a href="https://www.smartbooks.sk/kontakty/">Kontakty</a>
                        <a href="https://www.smartbooks.sk/podpora/">Podpora</a>
                        <a href="https://ucenie.smartbooks.sk/" className="desktop-hidden">Prihlásiť / Registrovať sa</a>
                        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className='nav-btn' onClick={showNavbar}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;