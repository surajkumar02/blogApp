import React from 'react'


export default class Home extends React.Component{
    constructor(props){
        super(props)
        
    
    }

    render(){
        const {blogs}=this.props
        return (
            <div>
                HomePage
                <div>
                {blogs.map((item,ind)=>
                <input key={ind} type='text' style={{padding:"1rem", textAlign:"right"}} value={item.blog}/>)}
                </div>
            </div>
        )
    }
}