import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles';

const Pages = [
  { path: '/details', exact: true, component: lazy(() => import('./pages/details/details')) },
  { path: '/', exact: true, component: lazy(() => import('./pages/home/home')) },
];

function AppRoot() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback="loading...">
        <Switch>
          {Pages.map(page => (
            <Route key={page.path} exact={page.exact} path={page.path} component={page.component} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
