import React,{Component,createContext} from "react";
import axios from "axios";
import { redirect, useNavigate, Redirect} from "react-router-dom";
export const DataContext = createContext();

/*general level context provider, in this document are the main functions of the system in general*/
var authAxios = null

export class DataProvider extends Component{
    constructor(args){
        super(args);
        this.state={

        }
    }
    render(){
        const {state} = this
        return(
            <DataContext.Provider value={{
                GlobalState:state
              }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}