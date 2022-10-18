import React from 'react'
import sinFondoLogo from '../../images/sinFondoLogo.png';
import TextField from '@mui/material/TextField';
import useStateForms from '../../hooks/useStateForms';

export const ForgotPassword = () => {

    const { dataRegister, handleInputChange, postForgotPassword } = useStateForms();

    return (
        <div className='backgound'>
            <div className='container'>
                <div className='container-forgot'>
                    <img src={sinFondoLogo} alt="logo" id='logo-login' />
                    <div className='title-forgot'>
                        <h3 className="h3-forgot">
                            <strong>
                                Forgot your password?
                            </strong>
                        </h3>
                        <h3 className="h3-forgot">
                            Let’s fix that.Provide us with the email address you use to log in to socialMetric, and we’ll send you a link to reset your password
                        </h3>
                    </div>
                    <form onSubmit={postForgotPassword}>
                        <div className="aling-forgot">
                            <TextField
                                type='email'
                                name='email'
                                placeholder='email'
                                onChange={handleInputChange}
                                value={dataRegister.email}
                                label="Email Address"
                                autoFocus
                                size="small"
                                className='input-80'
                            />
                        </div>
                        <button className='submit' id='submit-forgot'>Reset</button>


                    </form>
                </div>
            </div>
        </div>
    )
}
