import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
               Header page
                
               <div> <Link to='/login' role='button'>Login</Link></div>
               <div><Link to='/signup' role='button'>Signup</Link></div>
               <div><Link to='/Guest' role='button'>login As Guest</Link></div>
                
            </div>
        )
    }
}