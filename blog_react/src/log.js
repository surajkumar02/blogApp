import React from 'react'
import axios from 'axios'


export default class Log extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:null,
            password:null,
            demo:null,
            blog:[],
            refresh:null,
            access:null,
            user:null,
            blog1:null,
            one:false,
            credentials:{

            }
         }
    }
    
    componentWillMount(){
        this.setState({one:false})
        axios({

            method: 'get',

            url: 'http://127.0.0.1:8000/blogs/',

            headers: {

                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.state.access}`

            },

            data: {
                
            }
        })
        .then(response=>this.setState({blog:response.data,login:true}))
        .catch(err=>axios({

            method: 'get',

            url: 'http://127.0.0.1:8000/blogs/',

            headers: {

                'Content-Type': 'application/json',
            },

            data: {
               refresh:this.state.refresh 
            }
        })
        ).then(response=>this.setState({user:response.data.user,access:response.data.access,refresh:response.data.refresh,login:true}))
        .then()
    }
    

    logIn(e){
        e.preventDefault()
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/login/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: {
                username:this.state.name,
                password:this.state.password
            }
            
            // JSON.stringify({
            //     username:e.target['name'].value,
            //     password:e.target['password'].value})
        

        })
        .then(response=>this.setState({user:response.data.user,access:response.data.access,refresh:response.data.refresh,login:true}))
        //.then(response=>this.setState({login:true}))
        .catch(err=>alert(err.data))
    }

    handleSubmit(e){
        e.preventDefault()
             
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/login/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: JSON.stringify({
                username:e.target['name'].value,
                password:e.target['password'].value})
        

        })
        .then(response=>console.log(response.data))
        .then(response=>this.setState({user:response.data.user,access:response.data.access,refresh:response.data.refresh}))
        .catch(err=>console.log("Please Enter Valid Credentials (User Not Found)"))
    
    }
    myPost(){
        this.setState({one:true})
        
        // axios.get('http://127.0.0.1:8000/blog/',{
        //     headers:{
        //         'Authorization': `Bearer ${this.state.access}`,
        //     }
        // })
        // ({

        //     method: 'get',

        //     url: 'http://127.0.0.1:8000/blog/',
        //     data: {
        //         user:this.state.user,
        //     },
            
        //     headers: {

        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${this.state.access}`

        //     }
        

        // }).then(response=>console.log(response.data))
            //{blog1:response.data,login:true}))
    //     .catch(err=>console.log(
    //         "data is not available"
    //     ))
    }

    allPost(e){
       
        this.setState({one:false})
        axios({

            method: 'get',

            url: 'http://127.0.0.1:8000/blogs/',

            headers: {

                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.state.access}`

            },

            data: {
                
            }
        })
        .then(response=>this.setState({blog:response.data,login:true}))
        .catch(err=>console.log(
            "data is not available"
        ))
    }

    post(e){
        axios.post('http://localhost:8000/blogs/',         
            {
                user:this.state.user,
                username:this.state.name,
                blog:this.state.data
            },{
            headers:{
                'Authorization':`Bearer ${this.state.access}`
            }
            }
            ).then(response=>this.setState({login:true}))
            .catch(err=>console.log(err.data))

    }

    edit(ind){
        axios({

            method: 'put',

            url: `http://127.0.0.1:8000/blog/${ind}`,

            headers: {

                'Content-Type': 'application/json',
                
                'Authorization':`Bearer ${this.state.access}`
                

            },

            data: {
                blog:this.state.value,
                like:this.state.liked,
                username:this.state.name,
                user:this.state.user
            }
        }).then(response=>console.log(response.data))

    }

    delete(ind){
        axios({

            method: 'delete',

            url: `http://127.0.0.1:8000/blog/${ind}/`,

            headers: {

                'Content-Type': 'application/json',
                
                'Authorization':`Bearer ${this.state.access}`

            },

        }).then(response=>console.log(response.data))
        .catch(err=>console.log(err.data))

    }


    render(){
        return (
            <div>
                {this.state.name}
             {!this.state.login &&   <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})} placeholder="Recipient's username" required/><br/>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's Password" required/><br/><br/>
                <button type='reset' onClick={(e)=>this.logIn(e)}>Submit</button>
                </form>}

             { this.state.login && <div className="m-4, b-1">
                <textarea type='text'value={this.state.data} className='form-control' rows='2' onChange={(e)=>this.setState({data:e.target.value})} placeholder="Input blog"/>
                <br/>
                <button type='submit' onClick={()=>this.post()}>Post</button>
                <div></div>
                <br/>
                <button onClick={()=>this.myPost()}>MyPost</button>
                <button onClick={(e)=>this.allPost(e)}>AllPost</button>
                <button onClick={()=>this.setState({access:null,refresh:null,blog:null,login:false})}>Log Out</button>
                <br/> <br/>
                {this.state.one && 
                <div className='container'>
                    <div className='row m-4'>
                    {this.state.blog.filter((items)=>(items.username===this.state.name)).map((item,ind)=>
                    <div className="col m-4 p-2 border" key={ind}>{item.blog} <br/>
                    <div>
                    <input key={ind} type='checkbox' value={false} onClick={(e)=>this.setState({liked:!this.state.liked})}/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type='submit' onClick={()=>this.edit(item.blog_id)}>Edit</button>
                    &nbsp;&nbsp;&nbsp;
                    <button type='submit' onClick={()=>this.delete(item.blog_id)}>Delete</button>
                    </div>
                    </div>)}
                    </div>
                 </div>}

                 {!this.state.one && 
                 <div className='container'> 
                    <div className='row m-4'>
                     {this.state.blog.map((item,ind)=>
                        <span className="col m-4 p-2 border" key={ind}>
                            <div>
                            <p>{item.username}</p>
                            <div></div>
                                {item.blog} <br/>
                            </div>
                        <input key={ind} type='checkbox' value={false} onClick={(e)=>this.setState({liked:!this.state.liked})}/>
                        </span>)}
                    </div>
                </div>}
                </div>
            }
            </div>


        )
    }
}
