import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SingleCockTail from './SingleCockTail'
import Error from './Error'
function Co() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cocktail/:id">
                    <SingleCockTail />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>

    )
}

export default Co
