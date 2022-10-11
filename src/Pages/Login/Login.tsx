import { Button, TextField, Typography } from "@material-ui/core";
import { Grid, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import React, { useState, useEffect, ChangeEvent } from "react";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { login } from "../../services/Service";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("usuario logado com sucesso!");
    } catch (error) {
      alert("Dados do usuario inconsistente. Erro ao logar");
    }

    console.log("userLogn: " + Object.values(userLogin));
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="banner-login"
    >
      <Grid item xs={6} alignItems="center" className="container-login">   
      <div className="ball-1" ></div>
        <div className="ball-2" ></div>
        <form onSubmit={onSubmit}className="form-login">
          <Box paddingX={10} >
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuario"
              name="usuario"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="senha"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            ></TextField>
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </Box>
        </form>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Box marginRight={1}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Não tem conta ainda?
            </Typography>
          </Box>
          <Link to="/cadastrar">
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Cadastre-se
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
