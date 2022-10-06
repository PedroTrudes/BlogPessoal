import {  Button,  Paper, TextField,Typography } from "@material-ui/core";
import { Grid, Box } from '@mui/material'
import {Link} from 'react-router-dom';
import "./Login.css";

function Login() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} alignItems="center">
        <form action="">
      <Box paddingX={10}>
          <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align="center" >Entrar</Typography>
          <TextField id='usuario' label='usuario' name='usuario' margin='normal' fullWidth></TextField>
          <TextField id='senha' label='senha' name='senha' margin='normal' type='password' fullWidth ></TextField>
          <Box marginTop={2} textAlign='center'>
            <Link to='/home' className='text-decorator-none'>
              <Button type='submit' variant='contained' color='primary'>Logar</Button>
            </Link>
          </Box>
      </Box>
        </form>
    <Box display='flex' justifyContent='center' marginTop={2}>
      <Box marginRight={1}>
        <Typography variant='subtitle1' gutterBottom align='center'>
          Não tem conta ainda?
        </Typography>
      </Box>
      <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
    </Box>
      </Grid>
      <Grid className="banner-login" item xs={6}>
      </Grid>
    </Grid>
  
  );
}

export default Login;