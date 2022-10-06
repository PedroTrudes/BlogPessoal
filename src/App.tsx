import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/NavBar'; 
import Home from './Pages/Home/Home';
import Cadastrar from './Pages/Cadastrar/Cadastrar';
import Login from './Pages/Login/Login';
import Postagens from './Pages/Postagens/Postagens';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<Cadastrar />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/postagem' element={<Postagens />}/>
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
