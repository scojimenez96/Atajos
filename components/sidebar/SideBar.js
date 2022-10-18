import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import report from "../../images/chart-pie-alt.svg"
import like from "../../images/pulgares-hacia-arriba.svg"
import home from "../../images/hogar.svg"

export const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <img src={home} alt="home" className="icon-sidebar" /><NavLink activeClassName='active' active to="/loginscreen">Home</NavLink>
          </li>
          <li>
            <img src={like} alt="connect" className="icon-sidebar" /><NavLink activeClassName='active' to="/conections">Connect a profile</NavLink>
          </li>
          <li>
            <img src={report} alt="report" className="icon-sidebar" /><NavLink activeClassName='active' to="/reportpowerbi">Report</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
