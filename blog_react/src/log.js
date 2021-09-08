import React from 'react'
import axios from 'axios'
import Home from './home'
import { findLastIndex } from 'lodash'

export default class Log extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:null,
            email:null,
            password:null,
            guest:false,
            login:false,
            signup:false,
            flag:false
        }
    }
    componen(){
        this.setState({flag:!this.state.flag})
    }

    logIn(email,password){
        axios.post()
    }


    signUp(name,email,password){
        axios.post()
    }

    render(){
        const {blog}=this.props
        return (
            <div>
                <button className="btn-warning" onClick={()=>this.setState({guest:!this.state.flag,login:false,signup:false})} type="button">Guest</button>
            &nbsp;&nbsp;
                <button className="btn-success" onClick={()=>this.setState({login:!this.state.flag,signup:false})} type="button">Login</button>
            &nbsp;&nbsp;
            <button className="btn-primary" onClick={()=>this.setState({signup:!this.state.flag,login:false,guest:false})} type="button">Signup</button>
            <br/><br/>  
            {this.state.login && <form>
                
                <input type="email"  onChange={(e)=>this.setState({email:e.target.value})} placeholder="Recipient's Email" required/><br/>
                <input type="password"  onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's Password" required/><br/><br/>
                <button type="submit">Submit</button>
                </form> }
         
           {this.state.signup && <form>
                
            <input type="text"  onChange={(e)=>this.setState({name:e.target.value})} placeholder="Recipient's username" required/><br/>
            <input type="email"  onChange={(e)=>this.setState({email:e.target.value})} placeholder="Recipient's Email"/><br/>
            <input type="password"  onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's Password"/><br/><br/>
            <button type="submit">Submit</button>
            </form>}

            {this.state.guest && <Home blogs={blog}/> }
            </div>


        )
    }
}