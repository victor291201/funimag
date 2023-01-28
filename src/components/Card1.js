import React,{Component} from 'react';
import "../styles/Card1/styles.css";



function Card1(props){
        return(
            <div className='card1'>
                {props.tipo?
                    <div className='card1-pt3-2'>
                        <p>Nuevo usuario</p>
                        <span class="material-symbols-outlined">
                            magic_button
                        </span>
                    </div>
                    :
                    <div className='card1-pt3-1'>
                        #999
                    </div>
                }
                <div className='card1-pt1'>
                    <div className='card1-info'>
                        <div className='card1-person'></div>
                        <p className='card1-name'>Jane doe <span>(Ing Sistemas)</span></p>
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
                        <div className='card1-stat'>
                            <p className='card1-title-stat'>
                            <span class="material-symbols-outlined">
                                bar_chart
                            </span>
                            </p>
                            <div className='card1-points-ofstat'>
                                <div className='card1-points'></div>
                            </div>
                            <p>4,2</p>
                        </div>
                    </div>
                    <div className='card1-reviews'>
                        <h3>Valoracion <span>(4,2)</span></h3>
                        <div className="card1-stars">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


export default Card1;
