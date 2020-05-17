import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Record } from 'immutable';

const actionCreator = actionCreatorFactory('Counter');

export class CounterState extends Record<{
  count: number;
}>({
  count: 1
}) {}

export const counterActions = {
  increment: actionCreator<number>('INCREMENT_COUNT')
};

const counterReducer = reducerWithInitialState(new CounterState()).case(
  counterActions.increment,
  (state, payload) => {
    return state.set('count', state.count + payload);
  }
);

export default counterReducer;
