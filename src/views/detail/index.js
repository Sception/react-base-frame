import React,{Component} from 'react'
import {Route,Switch } from 'react-router-dom'

class Detail extends Component{
    render(){
        console.log(this.props)
        const match=this.props.match
        return (
            <div className='detail'>
                <div>Detail</div>
            </div>
        )
    }
}

export default Detail