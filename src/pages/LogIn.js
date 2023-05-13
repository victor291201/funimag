import React,{Component} from 'react';
import "../styles/LogIn/styles.css";
import { Link } from 'react-router-dom';



class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            img: 1
        };
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            if(this.state.img <4){
                this.setState(prevState => ({
                    img: prevState.img +1
                }));
            }
            else{
                this.setState(prevState => ({
                    img: 1
                }));
            }
        },3000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        return(
            <div className="Lgbody">
                {
                    {
                        1:  <div className='Lgimg'>
                                <div className='img1'></div><div className='img2 Lgdisapear'></div><div className='img3 Lgdisapear'></div><div className='img4 Lgdisapear'></div>
                            </div>,
                        2:  <div className='Lgimg'>
                                <div className='img1 Lgdisapear'></div><div className='img2'></div><div className='img3 Lgdisapear'></div><div className='img4 Lgdisapear'></div>
                            </div>,
                        3:  <div className='Lgimg'>
                                <div className='img1 Lgdisapear'></div><div className='img2 Lgdisapear'></div><div className='img3'></div><div className='img4 Lgdisapear'></div>
                            </div>,
                        4:  <div className='Lgimg'>
                                <div className='img1 Lgdisapear'></div><div className='img2 Lgdisapear'></div><div className='img3 Lgdisapear'></div><div className='img4'></div>
                            </div>,
                    }[this.state.img]
                }
                <div className='Lg-pt1'>
                    <h1>Funimag</h1>
                    <p>¡La nueva red social hecha por estudiantes de la universidad del magdalena para estudiantes de la universidad del magdalena!</p>
                </div>
                <div className='Lg-pt2'>
                    <div className='Lg-card'>
                        <p className='Lg-titulo'>Iniciar sesion</p>
                        <div className='Lginput-container'>
                            <div className='Lginput'>
                                <label for="correo">Correo:</label>
                                <input type="text" id="correo"/>
                            </div>
                            <div className='Lginput'>
                                <label for="contraseña">Contraseña:</label>
                                <input type="password" id="contraseña"/>
                            </div>
                            <button className='Lginiciars'>Iniciar sesion</button>
                        </div>
                        <p className='Lgolvidaste'>¿Olvidaste tu contraseña?</p>
                        <hr/>
                        <Link to="registrarse"><button className='Lgregister'>Registrarse</button></Link> 
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;
