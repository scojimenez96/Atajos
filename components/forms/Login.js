import React from 'react'
import { Link } from 'react-router-dom'
import useStateForms from '../../hooks/useStateForms';
import sinFondoLogo from '../../images/sinFondoLogo.png';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';

export const Login = () => {
    const { dataRegister, handleInputChange, postLogin, loading } = useStateForms()


    return (
        <div className='backgound'>
            <div className='container'>
                <div className='container-login'>
                    <img src={sinFondoLogo} alt="logo" id='logo-login' />
                    <h3>
                        Welcome back, good to see you again!
                    </h3>
                    <i class="far fa-user"></i>
                    <form>
                        <div className='aling-fiel'>
                            <i className="far fa-user"></i>
                            <TextField
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='input-90'
                                value={dataRegister.email}
                                onChange={handleInputChange}
                                // autoFocus
                                size="small"
                                label="Email" />
                        </div>
                        <div className='aling-fiel'>
                            <TextField
                                type='password'
                                name='password'
                                placeholder='Password'
                                className='input-90'
                                value={dataRegister.password}
                                onChange={handleInputChange}
                                // autoFocus
                                size="small"
                                label="Password" />
                        </div>
                        <Link to='/forgot' className='forgot'>Forgot password?</Link>
                        <button className='submit' onClick={postLogin} disabled={loading}>Sign in</button>
                        <p>Don't have an account? <Link to="/signup"><strong>Sign up now</strong></Link></p>

                    </form>
                </div>
            </div>
        </div>
    )
}
