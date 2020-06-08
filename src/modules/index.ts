/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

export interface State {
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history)
  });
