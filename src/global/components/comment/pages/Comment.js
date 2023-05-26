import "../utils/styles/styles.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Comment(props) {
    const [Toggle, setToggle] = useState(false);
    return (
                <div className='Cocoment1'>
                    <div className='CocomentUser'>
                        <p>Anonymous user1</p> <p> 29/12/2001 7:00pm</p>
                    </div>
                    <div className='CocomentComent'>
                        lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet
                    </div>
                    {props.RepliedComents && Toggle?
                    <div>
                        <div className="CoMostrarMas">
                            <a onClick={()=>{setToggle(false)}}>Ocultar 5 respuestas</a>
                            <span class="material-symbols-outlined">
                            undo
                            </span>
                        </div>
                        <div className='Cocoment2'>
                            <div className='CocomentUser'>
                                <p>Author</p> <p> 29/12/2001 7:00pm</p>
                            </div>
                            <div className='CocomentComent'>
                                lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet
                            </div>
                        </div>
                        <div className='Cocoment2'>
                            <div className='CocomentUser'>
                                <p>Anonymous user1</p> <p> 29/12/2001 7:00pm</p>
                            </div>
                            <div className='CocomentComent'>
                                lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet lorem ipsum dolorsit asimet
                            </div>
                        </div>
                        <div className='Coinput'>
                            <input type="text" placeholder='Responder...'/>
                            <FaPaperPlane className='icon'/>
                        </div>
                    </div>
                    :
                    <div className="CoMostrarMas">
                        <a onClick={()=>{setToggle(true)}}>Mostrar 5 respuestas</a>
                        <span class="material-symbols-outlined">
                        undo
                        </span>
                    </div>
                    }
                    
                </div>
    );
  }
  
  export default Comment;
