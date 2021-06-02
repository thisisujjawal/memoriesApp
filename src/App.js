import React,{useEffect , useState} from 'react'
import {Container , AppBar , Typography, Grow , Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
function App() {
    
    return (
        <BrowserRouter>
            <Container maxWidth = 'lg'>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
