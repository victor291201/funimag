import LogIn from "./features/login/pages/LogIn"
import Register from "./features/register/pages/Register"
import Inicio from "./features/inicio/pages/Inicio"
import Ranking from "./features/ranking/pages/Ranking"
import Titration from "./features/titration/pages/Titration"
import Profile from "./features/profile/pages/Profile"
import './global/styles/baseStyles/styles.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useContext } from "react"
import { DataContext } from "./controllers/Context"


function App() {
  const {GlobalState} = useContext(DataContext);
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
          <Route path='/valoracion' element={<Titration/>}/>
          <Route path='/perfil' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
