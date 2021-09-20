import React from 'react'
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './header'
import Log from './log'
import Footer from './footer'
import Guest from './guest';
import Signup from './sign';
import Demo from './demo';

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state={
          blog:[]
        }

    }
  //   componentDidMount(){
  //     axios.get('http://127.0.0.1:8000/blogs/')
  //     .then(response=> this.setState({blog:response.data}))
  //     .catch(err=> console.log("Error in Url"))
  // }
    


  render(){
      return (
          <div className='m-2'> 
          <BrowserRouter>
          <Header /> <br/>
            <Switch>
              <Route path='/login' component={Log} />
              <Route path='/signup' component={Signup} />
              <Route path='/demo' component={Demo} />
            </Switch>
          <Footer />
          </BrowserRouter>
          
         
            
          </div>
      )
  }   
}