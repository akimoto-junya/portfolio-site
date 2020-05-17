/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import counterReducer, { CounterState } from './counter';

export interface State {
  router: RouterState;
  counter: CounterState;
}

export const createRootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    counter: counterReducer
  });
