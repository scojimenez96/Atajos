import React from 'react'
import { HeaderLogin } from '../HeaderLogin'
import { SideBar } from '../sidebar/SideBar'
import { ConnectedProfiles } from './ConnectedProfiles'
import { InviteTeam } from './InviteTeam'

export const YourCompany = () => {
  return (
    <div>
      <HeaderLogin />
      <SideBar />
      <div className="body-conect">
        <div className='content-card'>
          <div className='box-yourcompany'>
            <h4>Your Company</h4>
            <hr />
            <div className='colum-yourcompany'>
              <div className='colum-left'>
                <InviteTeam />
              </div>
              <div className='colum-right'>
                <ConnectedProfiles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
