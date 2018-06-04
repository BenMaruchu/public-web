import reducer from '../statusFilter';
import {RECEIVE_STATUSES, TOGGLE_STATUS, RESET_STATUSES, RECEIVE_SR_SUMMARY} from '../../actions/index';

describe('statusFilter reducer', () => {


  it('should return the initial state', () => {
    const initialState = {statuses: []};
    const action = {};
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  // test invalid action should return initial state
  it('should handle RECEIVE_SR_SUMMARY', () => {
    const prevState = {statuses: []};

    const action = {type: RECEIVE_SR_SUMMARY, summary: prevState };

    expect(reducer(undefined, action)).toEqual(prevState);
  });

  it('should handle RECEIVE_STATUSES', () => {
    const expectOutput = {statuses: [{id: 1, name: 'faker'}]};

    const action = {type: RECEIVE_STATUSES, statuses: expectOutput.statuses};

    expect(reducer(undefined, action)).toEqual(expectOutput);
  });

  it('should handle TOGGLE_STATUS', () => {
    const expectOutput = {statuses: [{id: 1, name: 'Test', selected: true}, {id: 2, name: 'This'}]};

    const initialState = {statuses: [{id: 1, name: 'Test', selected: false}, {id: 2, name: 'This'}]};

    const action = {type: TOGGLE_STATUS, id: 1};

    expect(reducer(initialState, action)).toEqual(expectOutput);
  });
  it('should handle RESET_STATUSES', () => {
    const expectOutput = {statuses: [{id: 1, name: 'unit', selected: false}]};
    const initialState = {statuses: [{id: 1, name: 'unit'}]};

    const action = {type: RESET_STATUSES};
    expect(reducer(initialState, action)).toEqual(expectOutput);

  })

});
