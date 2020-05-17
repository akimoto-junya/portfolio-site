/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import { createRootReducer, State } from '@/modules';

const logger = createLogger({
  diff: true,
  duration: true
});

export const history = createBrowserHistory();

export function configureStore(preloadedState?: State) {
  const middlewares = [routerMiddleware(history), logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    middlewareEnhancer
  );
  return store;
}
