import React,{Component} from 'react';
import "../styles/Profile/styles.css";
import Navbar from '../components/Navbar';



class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='body'>
                <Navbar/>
                <div className='person'>
                    <div className='person-profile'>
                        <div className='person-img'></div>
                        <h1>Nombres y apellidos</h1>
                        <p>Facultad</p>
                    </div>
                    <div className='person-gustos'>
                        <p>Gustos</p>
                        <div className='gustos'>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                        </div>
                    </div>
                    <div className='person-logros'>
                        <p>Logros</p>
                        <div className='logros'>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                            <p>comer</p>
                        </div>
                    </div>
                </div>
                <div className='stats'>
                    <div className='stats-container'>
                        <div className='stats-title'>
                            <h1>stats</h1>
                        </div>
                    </div>
                        <div className='search'>
                            <p>valoracion y reseñas</p>
                            <div className='input'>
                                <input type="text" placeholder='Buscar...'/>
                            </div>
                        </div>
                    <div className='ranking'></div>
                </div>
            </div>
        )
    }
}

export default Profile;
