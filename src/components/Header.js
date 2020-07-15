import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const renderMenu = () => {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to = "/" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/conversor" className="nav-link">Conversor</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
    return (
        <>
            {renderMenu()}
        </>
    );

}

export default Header;