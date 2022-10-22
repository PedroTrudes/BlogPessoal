import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import CadastroUsuario from "./Pages/Cadastrar/Cadastrar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import "./App.css";
import ListaTema from "./Components/Temas/ListaTemas/ListaTema";
import ListaPostagem from "./Components/Postagens/ListaPostagens/ListaPostagem";
import CadastroPost from "./Components/Postagens/CadastroPost/CadastroPost";
import DeletarTema from "./Components/Temas/DeletarTemas/DeletarTemas";
import CadastroTema from "./Components/Temas/CadastrarTemas/CadastroTema";
import DeletarPostagem from "./Components/Postagens/DeletarPostagem/DeletarPostagem";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;