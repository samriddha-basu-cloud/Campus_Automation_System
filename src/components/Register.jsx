import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Button,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';

export const Register = () => {
    const [name, setName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [section, setSection] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [department, setDepartment] = useState('');
    const [officialMailId, setOfficialMailId] = useState('');
    const [passcode, setPasscode] = useState('');

    const handleRegister = () => {
        // Perform registration logic here
        console.log('Registration Data:', {
            name,
            registrationNumber,
            section,
            discipline,
            department,
            officialMailId,
        });
    };

    return (
        <Paper elevation={3} style={{ padding: 20, height: '78vh', width: 700, margin: '150px auto' }}>

            <Typography variant='h5' style={{ marginBottom: 16 }}>
                SRM Campus Automation Registration
            </Typography>

            <Grid container spacing={2} style={{ width: '450', justifyContent: 'center' }}>

                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        sx={{ width: '450px' }}
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Registration Number"
                        fullWidth sx={{ width: '450px' }}
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ width: '450px' }}>
                        <InputLabel>Section</InputLabel>
                        <Select
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                        >
                            <MenuItem value="A">A</MenuItem>
                            <MenuItem value="B">B</MenuItem>
                            <MenuItem value="C">C</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ width: '450px' }}>
                        <InputLabel>Discipline</InputLabel>
                        <Select
                            value={discipline}
                            onChange={(e) => setDiscipline(e.target.value)}
                        >
                            <MenuItem value="Engineering">Engineering</MenuItem>
                            <MenuItem value="Science">Science</MenuItem>
                            <MenuItem value="Arts">Arts</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ width: '450px' }}>
                        <InputLabel>Department</InputLabel>
                        <Select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <MenuItem value="Computer Science">Computer Science</MenuItem>
                            <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
                            <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Official Mail Id"
                        sx={{ width: '450px' }}
                        value={officialMailId}
                        onChange={(e) => setOfficialMailId(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Passcode"
                        sx={{ width: '450px' }}
                        type='password'
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleRegister}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
