import React,{Component} from 'react';
import "../styles/Card1/styles.css";



function Card1(props){
        return(
            <div className='card1'>
                <div className='card1-pt1'>
                    <div className='card1-info'>
                        <div className='card1-person'></div>
                        <p className='card1-name'>Jane doe</p>
                        <p className='card1-aditional-info'>
                            <span class="material-symbols-outlined">
                            female
                            </span>
                            18
                        </p>
                    </div>
                    <p className='card1-description'>
                    Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='card1-pt2'>
                    <div className='card1-stats'>
                        <h3>Stats</h3>
                        <h1>4,3</h1>
                    </div>
                    <div className='card1-reviews'>
                        <h3>Valoracion</h3>
                        <h1>4,3</h1>
                    </div>
                </div>
            </div>

        )
    }


export default Card1;
