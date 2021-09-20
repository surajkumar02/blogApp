import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className=''>
                <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href='http://localhost:3000'>Blog Application</a>
                <form className="d-flex">
                <button className='btn btn-primary '> <Link style={{color:'white'}} to='/login' role='button'>Login</Link></button> &nbsp;&nbsp;
                <button className='btn btn-warning '><Link style={{color:'black'}} to='/signup' role='button'>Signup</Link></button>
                </form>
                </div>
                </nav>
  
            </div>
        )
    }
}