import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link, Routes } from 'react-router-dom';
import SRMImg from '../assets/srm.jpeg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';



export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const paperStyle = { padding: 20, height: '52vh', width: 700, margin: '150px auto' };
    const avatarStyle = { backgroundColor: '#3f51b5' };
    const headingStyle = { marginBottom: 20 };
    const leftSideStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };
    const rightSideStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
    const imageStyle = { width: 350, height: 320, borderRadius: 20 };



    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'basusuppu@gmail.com' && password === 'ghoda') {
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
            setEmail('');
            setPassword('');
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };


    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid container spacing={5}>
                    {/* Left Part */}
                    <Grid item xs={6} style={leftSideStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' style={{ headingStyle, marginTop: 40 }}>
                                SRM Campus Automation
                            </Typography>
                        </Grid>
                        <TextField
                            value={email}
                            variant='outlined'
                            placeholder='johndoe@gmail.com'
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                            style={{ marginTop: 12 }}
                            InputProps={{
                                startAdornment: <EmailIcon style={{ marginRight: 8, color: 'gray' }} />,
                            }}
                        />
                        <TextField
                            value={password}
                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                            variant='outlined'
                            placeholder='password'
                            onChange={(event) => setPassword(event.target.value)}
                            style={{ marginTop: 10 }}
                            fullWidth
                            InputProps={{
                                startAdornment: <VpnKeyIcon style={{ marginRight: 8, color: 'gray' }} />,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            style={{ marginTop: 20 }}
                            type='submit'
                            color='primary'
                            variant='contained'
                            fullWidth
                            onClick={handleSubmit}
                            startIcon={<LockOutlinedIcon />}
                        >
                            Login
                        </Button>
                        <Typography style={{ marginTop: 10 }}>
                            <Link to='/forgot-password' style={{ textDecoration: 'none' }}>Forgot password?</Link>
                        </Typography>
                        <Typography style={{ marginTop: 10 }}>
                            Don't have an account? <Link to='/register' style={{ textDecoration: 'none' }}>Sign Up</Link>
                        </Typography>
                    </Grid>

                    {/* Right Part */}
                    <Grid item xs={6} style={rightSideStyle}>
                        <div style={rightSideStyle}>
                            <img src={SRMImg} alt='Your Image' style={imageStyle} />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    );
};