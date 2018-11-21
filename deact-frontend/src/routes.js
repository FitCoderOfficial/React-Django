import React from 'react';
import { Route } from 'react-router-dom';


import ArticleList from "./containers/ArticleListView";
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import signup from './containers/signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={signup} />
    </div>
);

export default BaseRouter;