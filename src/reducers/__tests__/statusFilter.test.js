import reducer from '../statusFilter';
import { RECEIVE_STATUSES, TOGGLE_STATUS, RESET_STATUSES, RECEIVE_SR_SUMMARY } from '../../actions/index';

describe('StatusFilter reducer', () => {
  it('should return the initial state', () => {
    const initialState = { statuses: [] };

    const action = {};

    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);

    expect(reducer(undefined, { type: RECEIVE_SR_SUMMARY, summary: { statuses: [] } }))
      .toEqual(initialState);
  });


  it('should handle RECEIVE_STATUSES', () => {
    const expectOutput = { statuses: [{ id: 1, name: 'faker' }] };

    const action = { type: RECEIVE_STATUSES, statuses: expectOutput.statuses };

    expect(reducer(undefined, action)).toEqual(expectOutput);
  });

  it('should handle TOGGLE_STATUS', () => {
    const expectOutput = { statuses: [{ id: 1, name: 'Test', selected: true }, { id: 2, name: 'This' }] };

    const initialState = { statuses: [{ id: 1, name: 'Test', selected: false }, { id: 2, name: 'This' }] };

    const action = { type: TOGGLE_STATUS, id: 1 };

    expect(reducer(initialState, action)).toEqual(expectOutput);
  });

  it('should handle RESET_STATUSES', () => {
    const expectOutput = { statuses: [{ id: 1, name: 'unit', selected: false }] };

    const initialState = { statuses: [{ id: 1, name: 'unit', selected: true }] };

    const action = { type: RESET_STATUSES };

    expect(reducer(initialState, action)).toEqual(expectOutput);
  });
});

