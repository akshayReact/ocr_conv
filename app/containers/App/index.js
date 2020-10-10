/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from 'containers/Landing/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <GlobalStyle />
    </>
  );
}