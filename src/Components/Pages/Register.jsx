import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DefaultNavbar from './navigation/DefaultNavbar';
import { useState } from 'react';
import {toast} from 'react-toastify'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Lending Mock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {

  const [customer, setCustomer] = useState({
    name:"",
    phoneNumber:"",
    email:"",
    dateOfBirth:"",
    adhar:"",
    panNumber:""
  })

  const handleInput = (e) =>{
    setCustomer({...customer,[e.target.name]:[e.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(customer.name==="" ||customer.phoneNumber==="" || customer.email==="" || customer.dateOfBirth==="" || customer.adhar==="" || customer.panNumber===""){
      toast.error("The given fields cannot be empty !!!")
    }
    else{
      if(isNaN(customer.phoneNumber) || (customer.phoneNumber.length<10 || customer.phoneNumber.length>10)){
        toast.error("Enter a valid Phone Number")
      }

      if(isNaN(customer.adhar) || (customer.adhar.length<12 || customer.adhar.length>12)){
        toast.error("Enter a valid Adhar number")
      }
    }
  };

  return (
    <>
    <DefaultNavbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  value={customer.name}
                  label="Full Name"
                  onChange={handleInput}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={customer.dateOfBirth}
                  onChange={handleInput}
                  defaultValue="2017-05-24"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                  value={customer.phoneNumber}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={customer.email}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="aadhar"
                  label="Aadhaar Number"
                  type="number"
                  id="aadhar"
                  value={customer.adhar}
                  onChange={handleInput}                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="panNumber"
                  label="PAN Number"
                  type="text"
                  id="panNumber"
                  value={customer.panNumber}
                  onChange={handleInput}                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}