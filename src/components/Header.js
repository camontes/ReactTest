import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const renderMenu = () =>{
        return(
            <>
                <div className="left menu">
                    <Link to="/" className="item">
                        <strong>HOME</strong>
                    </Link>
                </div>
                <div className="right menu">
                    <Link to="/conversor" className="item">
                        <strong>Conversor</strong>
                    </Link>
                </div>
            </>
        )
    }
    return(
        <div className="ui secondary pointing menu">
            {renderMenu()}
        </div>
    );
   
}

export default Header;