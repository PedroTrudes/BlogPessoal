import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/NavBar'; 
import Home from './Pages/Home/Home';
import Cadastrar from './Pages/Cadastrar/Cadastrar';
import Login from './Pages/Login/Login';
import ListaPostagem from './Components/Postagens/ListaPostagens/ListaPostagem';
import ListaTema from './Components/Temas/ListaTemas/ListaTema';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="container-home">
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<Cadastrar />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/temas' element={<ListaTema />} />
            <Route path='/posts' element={<ListaPostagem />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
