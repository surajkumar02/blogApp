import React from 'react'
import axios from 'axios'


export default class Guest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            liked:false,
            blog:[],
            access:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMxODE4Mjk5LCJqdGkiOiIxM2JlZTE4MDM1ZGI0MjAzYTI2NzI2ZDJhYThjZWIxZCIsInVzZXJfaWQiOjF9.RyVOmQkuMqHVBDZelN5iHf0qpc2r_ZEWpM5Jh6Hdyho"}
    
    }
    componentDidMount(){
    axios.get('http://127.0.0.1:8000/blogs/',{
        headers: {
            'Authorization': `Bearer ${this.state.access}`
        }
    }).then(response=>this.setState({blog:response.data})).catch(err=>console.log("Error"))
    }
    render(){
        
        return (
            
           
            <div>
                {this.state.liked && alert("Please login to make changes")}
                <div className="m-4, b-1">
                {this.state.blog.map((item,ind)=>
                <li key={ind}>{item.blog} <br/>
                <li key={ind}>{item.user.name}</li>
                <input key={ind} type='checkbox' value={this.state.liked} onClick={(e)=>this.setState({liked:!this.state.liked})}/> &nbsp; like
                </li> )}
                </div>

            </div>
        )
    }
}