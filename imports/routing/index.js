import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Router, Route, browserHistory} from 'react-router';


import Login from '../ui/pages/user/Login';
import Register from '../ui/pages/user/Register';
// import ArticleList from '../ui/pages/article/ArticleList';
import Articles from '../ui/pages/article/Articles';
// import ArticleCreate from '../ui/pages/article/ArticleCreate';
import NotFound from '../ui/pages/article/NotFound';

const unauthenticatedPages = ['/', '/register'];
const authenticatedPages = ['/articles']

const onEnterPublicPage = () => {
    if(Meteor.userId()) {
        browserHistory.replace('/articles');
    }
};

const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathName = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedpage = authenticatedPages.includes(pathName);

    if(isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/articles')
    } else if(isAuthenticatedpage && !isAuthenticated) {
        browserHistory.replace('/')
    }
}
export const RouterComponent = (
    <Router history={browserHistory}>
            <Route path="/" exact component={Login} onEnter={onEnterPublicPage}/>
            <Route path="/register" component={Register} onEnter={onEnterPublicPage}/>
            <Route path="/articles" component={Articles} onEnter={onEnterPrivatePage}/>
            {/* <Route path="/add-article" component={ArticleCreate} onEnter={onEnterPrivatePage}/> */}
            <Route component={NotFound}/>
    </Router>
);
