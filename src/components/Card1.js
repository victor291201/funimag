import React,{Component} from 'react';
import "../styles/Card1/styles.css";



function Card1(props){
        return(
            <div className='card'>
                <div className='card-pt1'>
                    <div className='card-info'>
                        <div className='card-person'></div>
                        <p className='card-name'>Jane doe</p>
                        <p className='card-aditional-info'>
                            <span class="material-symbols-outlined">
                            female
                            </span>
                            18
                        </p>
                    </div>
                    <p className='card-description'>
                    Lorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, coLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='card-pt2'>
                    <div className='card-stats'>
                        <h3>Stats</h3>
                        <h1>4,3</h1>
                    </div>
                    <div className='card-reviews'>
                        <h3>Valoracion</h3>
                        <h1>4,3</h1>
                    </div>
                </div>
            </div>

        )
    }


export default Card1;
