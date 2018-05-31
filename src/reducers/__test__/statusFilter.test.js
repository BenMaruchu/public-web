import reducer from '../statusFilter';
import { receiveStatuses, toggleStatus } from '../../actions';

describe('statusFilter reducer', () => {
  const initialState = { statuses: [] };
  const statusReceived = { statuses: { h: 'hello', b: 'ball' } };
  it('should return the initial state', () => {
    const action = {};
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  it('should handle RECEIVE_STATUSES', () => {
    const action = receiveStatuses({ h: 'hello', b: 'ball' });
    const state = reducer(initialState, action);
    expect(state).toEqual(statusReceived);
  });
  it('should handle TOGGLE_STATUS', () => {
    const previousState = { ...initialState, ...statusReceived };
    const idReceived = { previousState, idOne: 0, idTwo: 1, idThree: 2 };
    const action = toggleStatus({ idOne: 0, idTwo: 1, idThree: 2 });
    const state = reducer(previousState, action);
    expect(state).toEqual(idReceived);
  });
});
