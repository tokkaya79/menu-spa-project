import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="pink lighten-2">
            <div className="nav-wrapper">
                <a
                    href="/"
                    className="brand-logo"
                >
                    Menu SPI
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down"
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                   
                    
                </ul>
            </div>
        </nav>
    );
}

export { Header };