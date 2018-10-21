import React,{Component} from 'react'
import {Router,Route,BrowserRouter,Link,Switch } from 'react-router-dom'
import Home from 'views/home/index'
import Detail from 'views/detail/index'
import pageNotFound from 'views/pageNotFound/index'
import Board from 'views/board/index'

const supportsHistory = 'pushState' in window.history;
class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter forceRefresh={!supportsHistory} >
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/detail">detail</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route  path="/detail" component={Detail}/>
                        <Route component={pageNotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )

    }
}

export default AppRouter