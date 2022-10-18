import React from 'react'
import sinFondoLogo from '../images/sinFondoLogo.png'
import {
    Link,
    NavLink,

} from "react-router-dom";



export const Header = () => {

    return (
        <div className='toolbar-row'>
            <div className="header-row">
                <NavLink to="/"><img className="logo" src={sinFondoLogo} alt="logo" /></NavLink>
            </div>
            <div>
                <NavLink to="/signin" className='btn buttons-header' id='signin'>Sign in</NavLink>
                <NavLink to="/signup" className='btn buttons-header' id='signup'>Sign up</NavLink>
            </div>
        </div>

    )
}

