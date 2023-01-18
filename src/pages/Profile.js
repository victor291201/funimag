import React,{Component} from 'react';
import "../styles/styles.css";
import Navbar from '../components/Navbar';



class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='body'>
                <Navbar/>
                <div className='person'></div>
                <div className='stats'></div>
            </div>

        )
    }
}

export default Profile;
