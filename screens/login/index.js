import React from 'react';
import { HeaderLogin } from '../../components/HeaderLogin';
import fondoHome from '../../images/fondoHome.png'
import { SideBar } from '../../components/sidebar/SideBar';
//import { YourCompany } from '../../components/teamMember/YourCompany';

//import { ConectionScreen } from '../conection/ConectionScreen';

function LoginScreen() {
  return (
    <div>
      <HeaderLogin />
      <SideBar />
      <div className="body-conect">
        <div className='content-card'>
          <img src={fondoHome} alt='fondoHome' className='imghome' />
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;