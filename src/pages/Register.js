import React,{Component} from 'react';
import "../styles/Register/styles.css";



class Register extends Component{
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
            <div className='Rebody'>
                {
                    {
                        1:  <div className='Reimg'>
                                <div className='img1'></div><div className='img2 Redisapear'></div><div className='img3 Redisapear'></div><div className='img4 Redisapear'></div>
                            </div>,
                        2:  <div className='Reimg'>
                                <div className='img1 Redisapear'></div><div className='img2'></div><div className='img3 Redisapear'></div><div className='img4 Redisapear'></div>
                            </div>,
                        3:  <div className='Reimg'>
                                <div className='img1 Redisapear'></div><div className='img2 Redisapear'></div><div className='img3'></div><div className='img4 Redisapear'></div>
                            </div>,
                        4:  <div className='Reimg'>
                                <div className='img1 Redisapear'></div><div className='img2 Redisapear'></div><div className='img3 Redisapear'></div><div className='img4'></div>
                            </div>,
                    }[this.state.img]
                }
                <div className='Recard'>
                    <h1>Registrarse</h1>
                    <div className='Reinput'>
                        <label for="">Correo institucional:</label>
                        <input type="text" id=""/>
                    </div>
                    <div className='Reinput'>
                        <label for="">Contraseña:</label>
                        <input type="text" id=""/>
                    </div>
                    <button>Registrarse</button>
                </div>
            </div>
        )
    }
}

export default Register;
