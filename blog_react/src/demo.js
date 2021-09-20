import React from 'react'

export default class Demo extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
            blog:[]
        }
    }


render(){
    return (
    <div>
        {this.state.blog}
        Demo Page <br/>
        <textarea className='form-control' rows='4' onChange={(e)=>this.setState({blog:e.target.value})} placeholder="Input blog"/>
        <button type='submit'>Post</button>
                
    </div>)
    }
}