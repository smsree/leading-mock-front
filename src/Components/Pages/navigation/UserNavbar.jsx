import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function UserNavbar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <AutoAwesomeIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGow: 1}}>
                    Lending Mock Application
                </Typography>
                <Stack direction='row' spacing={2} sx={{ml:'auto'}}>
                    <Button
                    color='inherit' 
                    component={Link}
                    to='#'
                     >
                        Loans
                    </Button>
                    <Button color='inherit'
                        component={Link}
                        to='#' 
                     >
                        Offer
                    </Button>
                    <Button color='inherit'
                        component={Link}
                        to='#' 
                     >
                        Status
                    </Button>
                    <Button color='inherit'
                        component={Link}
                        to='#' 
                     >
                        Logout
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
      )
}

export default UserNavbar