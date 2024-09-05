import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/style-header.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <div className="top-bar"></div>
            <div className="main-bar">
                <a href='/#' className='logo-header-link'>
                    <img 
                    src='https://www.smartbooks.sk/wp-content/uploads/2024/09/logo-new-1536x330-1.png'
                    alt='Logo smartbooks.sk'
                    className='logo-header'/>
                </a>
                <nav ref={navRef}>
                    <a href="/#">Na doma</a>
                    <a href="/#">Pre školy</a>
                    <a href="/#">Smart učenie</a>
                    <a href="/#">Predmety</a>
                    <a href="/#">Podpora</a>
                    <a href="/#">Cenník</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;