import React from 'react';
import { Grid, Box } from '@mui/material'
import {  Button,TextField,Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';
import './Cadastrar.css';

function Cadastrar(){
    return(
        <Grid container className="imagem-2" direction='row' alignItems='center' justifyContent='center'>
            <Grid item xs={6} className="container-form">
            <form action="">
      <Box paddingX={10}>
          <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align="center" >Entrar</Typography>
          <TextField id='nome' label='nome' name='nome' margin='normal' fullWidth></TextField>
          <TextField id='usuario' label='usuario' name='usuario' margin='normal' fullWidth></TextField>
          <TextField id='senha' label='senha' name='senha' margin='normal' type='password' fullWidth ></TextField>
          <TextField id='confirmarSenha' label='confirmarSenha' name='confirmarSenha' margin='normal' type='password' fullWidth ></TextField>
          <Box marginTop={2} textAlign='center'>
            <Link to='/login' className='text-decorator-none' >
              <Button variant='contained' color='secondary' className="btnCancelar">Cancelar</Button>
            </Link>
            <Link to='/cadastrar' className='text-decorator-none'>
              <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
            </Link>
          </Box>
      </Box>
        </form>
            </Grid>
        </Grid>
    );
};

export default Cadastrar;