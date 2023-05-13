import Profile from './pages/Profile';
import Ranking from './pages/Ranking';
import Valoracion from './pages/Valoracion';
import Inicio from "./pages/Inicio";
import LogIn from './pages/LogIn';
import Register from "./pages/Register"
import './styles/BaseStyles/styles.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  if(false){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/registrarse' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  else{
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
          <Route path='/valoracion' element={<Valoracion/>}/>
          <Route path='/perfil' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
