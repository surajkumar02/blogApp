import React from 'react'

export default class Demo extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
            blog:[
                "data isdhcgdjg nsdgjhd",
                'hgasdfhgdf',
                'mdshgfjhdgjgdsf',
                'mhbdghdss',
                'mjdgfjhdsseefg'
            ]
        }
    }


render(){
    return (
    <div>
        Demo Page <br/>
        <textarea className='form-control' rows='4' onChange={(e)=>this.setState({blog:e.target.value})} placeholder="Input blog"/>
        <button type='submit'>Post</button>

        <div class="container">
        <div class="row">
            {this.state.blog.map((item,ind)=>
            
              <span class="col m-4 p-2 border">
                {item}
              </span>
            
            )}
            </div>
        </div>
                
    </div>)
    }
}