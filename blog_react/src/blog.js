import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './header'
import Log from './log'
import Footer from './footer'

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state={
          blog:[]
        }

    }
    componentDidMount(){
      axios.get('http://127.0.0.1:8000/blogs/')
      .then(response=> this.setState({blog:response.data}))
      .catch(err=> console.log("Error in Url"))
  }
    


  render(){
      return (
          <div className='m-2'> 
            <Header /> <br/>
            <Log blog={this.state.blog}/><br/>
            <Footer />
          </div>
      )
  }   
}