import React from 'react'
import { Link } from 'react-router-dom'
import folder from "../../images/folder.png"
import more from "../../images/mas.png"

export const ConnectedProfiles = () => {
  return (
    <div>
      <h4>Group Filter</h4>
      <div className='groupfilter'>
        <span><img src={folder} alt="folder" /></span>
        Colombo
      </div>
      <h6>1 team member in colombo</h6>
      <div className='teammember'>TL</div>
      <h6>1 profile connected</h6>
      <div className='profileconnet'>
        <div>
          <span>
            img
          </span>
        </div>
        <div>
          <strong>
            vagary
          </strong>
          <p>Facebook Page</p>
        </div>
        <div className='mini-menu'>
          <span><img src={more} alt="menu" /></span>
        </div>
      </div>
      <div className='allavailable'>
        <h3>
          All available profiles connected
        </h3>
        <Link to='/conections' className='allavailableconnect'>
          Connect a Profile
        </Link>
      </div>
    </div>
  )
}
