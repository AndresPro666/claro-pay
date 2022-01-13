import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../Page/Home';
import NotFoundPage from '../Page/NotFoundPage';
import ResultSearch from '../Page/ResultSearch';

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={(<Home/>)} />
                <Route  path="/result-search" element={(<ResultSearch/>)} />
                <Route  path="/*" element={(<NotFoundPage/>)} />
            </Switch>

        </BrowserRouter>
    );

};
export default Router;