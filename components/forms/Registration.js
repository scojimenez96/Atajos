import React from 'react';
import useStateForms from '../../hooks/useStateForms';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export const Registration = () => {

    const { dataRegister, handleInputChange, postRegister, loading } = useStateForms()

    return (
        <div className='backgound'>
            <div className='container'>
                <div className='container-registro'>
                    <h1>
                        Create your account
                    </h1>
                    <form >
                        <div className='row-name'>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    name='firstname'
                                    placeholder='Firt name'
                                    className='input-48'
                                    id='name'
                                    value={dataRegister.firstname}
                                    onChange={handleInputChange}
                                    autoFocus
                                    size="small"
                                    label="Firt name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    name='lastname'
                                    placeholder='Last name'
                                    className='input-48'
                                    id='name2'
                                    value={dataRegister.lastname}
                                    onChange={handleInputChange}
                                    autoFocus
                                    size="small"
                                    label="Last name" />
                            </Grid>
                        </div>
                        <TextField
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='input-90'
                            value={dataRegister.email}
                            onChange={handleInputChange}
                            autoFocus
                            size="small"
                            label="Email" />

                        <TextField
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='input-90'
                            value={dataRegister.password}
                            onChange={handleInputChange}
                            autoFocus
                            size="small"
                            label="Password" />

                        <TextField
                            type='Password'
                            name='ConfirmPassword'
                            placeholder='Confirm Password'
                            className='input-90'
                            autoFocus
                            size="small"
                            label="Confirm Password" />

                        <button className='submit' type='button' onClick={postRegister} disabled={loading}>Create account</button>
                        <p>Already have a SocialMetric account? <Link to="/signin"><strong>Sign in</strong></Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}
