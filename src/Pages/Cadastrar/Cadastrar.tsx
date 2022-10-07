import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import {cadastroUsuario} from '../../services/Service';
import { Grid, Box } from '@mui/material'
import {  Button,TextField,Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';
import './Cadastrar.css';

function Cadastrar(){

  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: ''
      })

  const [userResult, setUserResult] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: ''
      })

  useEffect(() => {
      if (userResult.id != 0) {
          navigate("/login")
          //mostrando oq foi enviado para a api JSON;
          console.log(userResult)
      }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

      setUser({
          ...user,
          [e.target.name]: e.target.value
      })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if (confirmarSenha == user.senha) {
          cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
          alert('Usuario cadastrado com sucesso')
      } else {
          alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
  }

    return(
        <Grid container className="imagem-2" direction='row' alignItems='center' justifyContent='center'>
            <Grid item xs={6} className="container-form">
            <form onSubmit={onSubmit}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="textos2"
                        >
                            Cadastrar
                        </Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome Completo"
                            name="nome"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="Usuário(email)"
                            name="usuario"
                            margin="normal"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha" 
                            name="senha"
                            margin="normal"
                            type="password"
                            className="cor-interna"
                            fullWidth
                        />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="Confirmar Senha"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            className="cor-interna"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained" color="primary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="secondary">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
            </Grid>
        </Grid>
    );
};

export default Cadastrar;