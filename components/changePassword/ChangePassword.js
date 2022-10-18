import React from 'react';
import useStateForms from '../../hooks/useStateForms';
import { HeaderLogin } from '../HeaderLogin';
import { SideBar } from '../sidebar/SideBar';

export const ChangePassword = () => {
  const { dataRegister, handleInputChange, loading } = useStateForms()
  return (
    <div>
      <HeaderLogin />
      <SideBar />
      <div className="body-conect">
        <div className='content-card'>
          <div >
            <form className="form-accounts">
              <h3>Change Password</h3>
              <div className="content-form-changepassword">
                <label className="form-label">Current Password</label>
                <input
                  type="password"
                  name="password"
                  value={dataRegister.password}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={dataRegister.newPassword}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={dataRegister.confirmPassword}
                  onChange={handleInputChange}
                  className="form-control"
                />
                <button className="button-changepassword">Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
