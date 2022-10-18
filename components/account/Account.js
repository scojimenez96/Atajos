import React from 'react'
import { Link } from 'react-router-dom'
import useStateForms from '../../hooks/useStateForms'
import { HeaderLogin } from '../HeaderLogin'
import { SideBar } from '../sidebar/SideBar'

export const Account = () => {

  const { dataRegister, handleInputChange, loading } = useStateForms()
  return (
    <div>
      <HeaderLogin />
      <SideBar />
      <div className="body-conect">
        <div className='content-card'>
          <div>
            <form className="form-accounts">
              <h3>Account</h3>
              <div className="content-form-account">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={dataRegister.firstname}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={dataRegister.lastname}
                  onChange={handleInputChange}
                />
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  value={dataRegister.email}
                  onChange={handleInputChange}
                />
                <Link to="/home/changepassword" className='buttonChangePassword'>Change Password</Link>
              </div>
              <br />
              <h3>Settings</h3>
              <div className="content-form-setting">
                <label className="form-label">Organization Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="organizationName"
                  value={dataRegister.organizationName}
                  onChange={handleInputChange} />
                <button className="button-account">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
