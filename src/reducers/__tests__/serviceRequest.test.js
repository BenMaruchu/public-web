import reducer from '../serviceRequests';
import { RECEIVE_SERVICEREQUESTS, RECEIVE_SR_SUMMARY } from '../../actions/index';

describe('ServiceRequest reducer', () => {
  it('should return initial state', () => {
    const initialState = [];

    const action = {};

    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);

    expect(reducer(undefined, RECEIVE_SR_SUMMARY)).toEqual(initialState);
  });

  it('should add service requests to state', () => {
    const expectedOutput = [1, 2, 3];

    const action = { type: RECEIVE_SERVICEREQUESTS, serviceRequests: [1, 2, 3] };

    const state = reducer(undefined, action);

    expect(state).toEqual(expectedOutput);
  });
});
