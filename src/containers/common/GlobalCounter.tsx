import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { counterActions } from '@/modules/counter';
import { State } from '@/modules';
import Counter, {
  StateProps,
  DispatchProps
} from '@/components/common/Counter';

const mapStateToProps = (state: State): StateProps => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onIncrement: (value: number): Action<number> =>
    dispatch(counterActions.increment(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
