import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  return (
    <header>
        <div className="top-bar"></div>
        <div className="main-bar">
            <h3>Logo</h3>
            <nav>
                <a href="/#">Domov</a>
                <a href="/#">Domov</a>
                <a href="/#">Domov</a>
                <a href="/#">Domov</a>
                <button>
                    <FaTimes />
                </button>
            </nav>
            <button>
                <FaBars />
            </button>
        </div>
    </header>
  );
}

export default Navbar;