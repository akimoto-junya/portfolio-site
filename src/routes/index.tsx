import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { App, Page } from '@/components/pages';
import Path from './Path';

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app.value} component={App} />
      <Route exact path={Path.about.value} component={Page} />
      <Redirect to={Path.app.value} />
    </Switch>
  </Layout>
);

export default routes;
