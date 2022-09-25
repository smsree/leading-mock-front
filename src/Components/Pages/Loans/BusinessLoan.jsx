import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserNavbar from '../navigation/UserNavbar';



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



export default function BusinessLoan() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <UserNavbar/>
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
            <AddBusinessIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Business Loan Application Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}  sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  defaultValue="2017-05-24"
                  
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  name="adhar"
                  label="Aadhaar Number"
                  type="number"
                  id="adhar"
                  
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  name="panNumber"
                  label="PAN Number"
                  type="text"
                  id="panNumber"
                  
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  name="rateOfInterest"
                  label="Intrest rate"
                  type="text"
                  id="rateOfInterest"
                  
                />
              </Grid>
              <Grid item xs={12}  sm={6}>
                <TextField
                  required
                  fullWidth
                  name="loanAmount"
                  label="Loan Amount"
                  type="text"
                  id="loanAmount"
                  
                />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      name="businessName"
                      label="Name of Your Business"
                      type="text"
                      id="businessName"
                    />
                </Grid>
                
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Apply for loan
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}