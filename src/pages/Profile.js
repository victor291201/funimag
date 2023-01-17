import React,{Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <body>
                <div className='nav'></div>
                <div className='person'></div>
                <div className='stats'></div>
            </body>

        )
    }
}

export default Profile;
