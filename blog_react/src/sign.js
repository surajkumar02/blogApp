import axios from 'axios'
import React from 'react'


export default class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:null,
            email:null,
            signup:false,
            blog:[],
            data:null
        }
    
    }
   signup(){
        axios.post('http://localhost:8000/signup/',       
        {
                username:this.state.name,
                password:this.state.password,
                email:this.state.email
            }
        ).then(response=>{this.setState({user:response.data.user,signup:true})})
        .catch(err=>console.log(err.data))
        }

    post(){
        axios.post('http://localhost:8000/blogs/',         
            {
                    username:this.state.name,
                    blog:this.state.data
                }
            ).then(response=>console.log(response.data))
            .catch(err=>console.log(err.data))

    }


    render(){
        return (
           
            <div>
             {!this.state.signup &&    <div>
                
                <input type="text"  onChange={(e)=>this.setState({name:e.target.value})} placeholder="Recipient's username" required/><br/>
                <input type="email"  onChange={(e)=>this.setState({email:e.target.value})} placeholder="Recipient's Email"/><br/>
                <input type="password"  onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's Password"/><br/><br/>
                <button type="submit" onClick={()=>this.signup()}>Submit</button>
                </div>}

             {this.state.signup && <div> 
                <textarea type='text' className='form-control' rows='4' onChange={(e)=>this.setState({data:e.target.value})} placeholder="Input blog"/>
                <br/>
                <button type='submit' onClick={()=>this.post()}>Post</button>
                <div></div>
                <br/>
                No Post Available
                </div>}

            </div>
        )
    }
}