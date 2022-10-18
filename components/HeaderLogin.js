import React, { useState } from 'react';
import sinFondoLogo from '../images/sinFondoLogo.png';
import {
  Link,
  NavLink,

} from "react-router-dom";
import menutrespunto from '../images/menutrespunto.png';
import useMenu from '../hooks/useMenu';


export const HeaderLogin = (props) => {
  const { buttonMenu, handlebutton } = useMenu()

  return (
    <frameElement>
      <div className='toolbar-row'>
        <div className="header-row">
          <NavLink to="/"><img className="logo" src={sinFondoLogo} alt="logo" /></NavLink>
        </div>
        <div>
          <img src={menutrespunto} alt='menu' className='pointmenu' onClick={handlebutton} />
          <div className='style-menu animate__animated animate__fadeInTopRight' id='button-headers-login'>
            <div className="magin-menu1">
              <span>
                Hey there,
              </span>
            </div>
            <hr />
            <div className="magin-menu2">
              {
                buttonMenu.map(({ id, detail, to, handleclip }) => (
                  <Link active to={to} key={id}><button onClick={handleclip} className="">{detail}</button></Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </frameElement >
  )
}
