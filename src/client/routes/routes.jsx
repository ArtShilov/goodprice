import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import App from '../components/app/app';
import HomePage from '../components/home-page/home-page';
import InfoPage from '../components/info-page/info-page';
import Page404 from '../components/page404/page404';
import Login from '../components/login';
import CardProduct from '../components/card-product/card-product';
import BigProduct from '../components/big-product/big-product';


const WrappedApp = (Component, props) => (
  <App appName='GoodPrice'>
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    <Route
      exact path={ PAGES.card.path }
      render={ props => WrappedApp(CardProduct, props) }
    />
    <Route
    exact path={ PAGES.home.path }
      render={ props => WrappedApp(HomePage, props) }
    />
    <Route
       path={ PAGES.BigProduct.path }
      render={ props => WrappedApp(BigProduct, props) }
    />
    <Route
      exact path={ PAGES.info.path }
      render={ props => WrappedApp(InfoPage, props) }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
      <Route
        exact path={ PAGES.login.path }
        render={ props => WrappedApp(Login, props) }
      />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
