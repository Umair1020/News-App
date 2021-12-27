import News from '../components/News';
import { Switch } from 'react-router-dom';
import React from 'react'

import { Route } from "react-router-dom";

const Routers = () => {
    const pageSize = 90

    return (
        <Route>
            <Switch>
       
                <Route exact path="/"><News key="general" pageSize={pageSize} country="in" category="general" /></Route>
                <Route exact path="/business"><News key="business" pageSize={pageSize} country="in" category="business" /></Route>
                <Route exact path="/health"><News key="health" pageSize={pageSize} country="in" category="health" /></Route>
                <Route exact path="/technology"><News key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
                <Route exact path="/sports"><News key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
                <Route exact path="/sciences"><News key="sciences" pageSize={pageSize} country="in" category="science" /></Route>
                <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            </Switch>
        </Route>
    )
}
export default Routers