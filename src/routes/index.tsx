import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { App, About, Works, Skills, Links } from '@/components/pages';
import Path from './Path';

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app.value} component={App} />
      <Route exact path={Path.about.value} component={About} />
      <Route exact path={Path.works.value} component={Works} />
      <Route exact path={Path.skills.value} component={Skills} />
      <Route exact path={Path.links.value} component={Links} />
      <Redirect to={Path.app.value} />
    </Switch>
  </Layout>
);

export default routes;
