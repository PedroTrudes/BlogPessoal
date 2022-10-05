import {
    AppBar,
    Toolbar,
    Typography
  } from "@material-ui/core";
  import { Box } from '@mui/material'
  import {Link} from 'react-router-dom';
  import './Nav.css';
  
  function NavBar() {
    return (
      <>
        <AppBar position="static">
            <Toolbar variant='dense' >
            <Box display='flex' justifyContent='space-around' className="tollbar-container">
              <Box style={{cursor: 'pointer'}}>
              <Typography variant="h5" color='inherit'>
                BlogPessoal
              </Typography>
              </Box>
              <Box display='flex' justifyContent='start'>
                <Link to='/Home' style={{textDecoration: 'none', color: 'white'}}>
                <Box mx={1} style={{cursor: 'pointer'}}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
                </Box>
                </Link>
                <Link to='/Postagens' style={{textDecoration: 'none', color: 'white'}}>
                <Box mx={1} style={{cursor: 'pointer'}}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              </Link> 
              <Link to='/Perfil' style={{textDecoration: 'none', color: 'white'}}>
              <Box mx={1} style={{cursor: 'pointer'}}>
                <Typography variant="h6" color="inherit">
                  Perfil
                </Typography>
              </Box>
              </Link>
              <Link to='/login' style={{textDecoration: 'none', color: 'white'}}>
              <Box mx={1} style={{cursor: 'pointer'}}>
                <Typography variant="h6" color="inherit">
                  Login
                </Typography>
              </Box>
              </Link>
      
              <Link to='/Login' style={{textDecoration: 'none', color: 'white'}}>
              <Box mx={1} style={{cursor: 'pointer'}}>
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
              </Link>
            </Box>
            </Box>
            </Toolbar>
          </AppBar>
      </>
    );
  }
  
  export default NavBar;
  