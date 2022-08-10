import React from "react";
import './header.css';
import logo from '../../images/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
            <a className="navbar-brand" href="/">
                <img src={logo} className="logo" alt="logo"/>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/list">
                            Articles
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Events
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact US
                        </a>
                    </li>
                </ul>
                <div className="cart">
                    <Badge color="secondary" badgeContent="1">
                    <ShoppingCartIcon/>
                    </Badge>
                </div>
            </div>
        </nav>
    );
}

export default Header;
