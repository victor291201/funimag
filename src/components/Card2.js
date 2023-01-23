import React,{Component} from 'react';
import "../styles/Card2/styles.css";



function Card2(props){
        return(
            <div className='card2'>
                <div className='card2-pt1'>
                    <div className='card2-info'>
                        <div className='card2-info-pt1'> 
                            <div className='card2-person'></div>
                            <p className='card2-name'>Jane doe</p>
                            <p className='card2-aditional-info'>
                                <span class="material-symbols-outlined">
                                female
                                </span>
                                18
                            </p>
                            <p> - Anonimous User</p>
                        </div>
                        <div className='card2-stars'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p className='card2-description'>
                    Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='card2-interactions'>
                    <span class="material-symbols-outlined">
                        thumb_up
                    </span>
                    <span class="material-symbols-outlined">
                        chat_bubble
                    </span>
                </div>
            </div>

        )
    }


export default Card2;
