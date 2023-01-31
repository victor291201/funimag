import "../styles/Filter/styles.css"
function Filter(props) {
    return (
        <div>
        {props.type?
        <div className='filter-container-Peoples'>
            <h4>Filtros de personas</h4>
            <div className='inputscontainer'>
                <div className='coments'>
                    <p>Facultad:</p> 
                    <select name="cars" id="cars" form="carform">
                        <option value="volvo">Empresariales</option>
                        <option value="saab">Ingenieria</option>
                        <option value="opel">Licenciatura</option>
                        <option value="audi">Humanidades</option>
                    </select>
                </div>
                <div className='coments'>
                    <p>Programa:</p> 
                    <select name="cars" id="cars" form="carform">
                        <option value="volvo">Adm empresas</option>
                        <option value="saab">Contaduria</option>
                        <option value="opel">Negocios internacionales</option>
                        <option value="audi"></option>
                    </select>
                </div>
                <div className='stars-container'>
                    <p>Valoracion:</p>
                    <div className='stars'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='coments'>
                    <p>Stats:</p> 
                    <input type="range"/>
                </div>
                <div className='edad'>
                    <p>Edad:</p> 
                    <input type="range"/>
                </div>
                <div className='gender'>
                    <p>Genero:</p>
                    <div className='genderM'>
                        <input type="radio" id="M" value="M"/>
                        <label for="M">Masculino</label>
                    </div>
                    <div className='genderF'>
                        <input type="radio" id="F" value="F"/>
                        <label for="F">Femenino</label>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className='filters'>
            <div className='filter-container-Peoples'>
                <h4>Filtros de personas</h4>
                <div className='inputscontainer'>
                    <div className='order'>
                        <p>Orden:</p> 
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Ascendente</option>
                            <option value="saab">Descendente</option>
                        </select>
                    </div>
                    <div className='coments'>
                        <p>Facultad:</p> 
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Empresariales</option>
                            <option value="saab">Ingenieria</option>
                            <option value="opel">Licenciatura</option>
                            <option value="audi">Humanidades</option>
                        </select>
                    </div>
                    <div className='coments'>
                        <p>Programa:</p> 
                        <select name="cars" id="cars" form="carform">
                            <option value="volvo">Adm empresas</option>
                            <option value="saab">Contaduria</option>
                            <option value="opel">Negocios internacionales</option>
                            <option value="audi"></option>
                        </select>
                    </div>
                    <div className='stars-container'>
                        <p>Valoracion:</p>
                        <div className='stars'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='coments'>
                        <p>Stats:</p> 
                        <input type="range"/>
                    </div>
                    <div className='edad'>
                        <p>Edad:</p> 
                        <input type="range"/>
                    </div>
                    <div className='gender'>
                        <p>Genero:</p>
                        <div className='genderM'>
                            <input type="radio" id="M" value="M"/>
                            <label for="M">Masculino</label>
                        </div>
                        <div className='genderF'>
                            <input type="radio" id="F" value="F"/>
                            <label for="F">Femenino</label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        }
        </div>
        
    );
  }
  
  export default Filter;
