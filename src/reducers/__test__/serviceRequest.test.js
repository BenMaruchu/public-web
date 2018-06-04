import reducer from '../serviceRequests';
import { RECEIVE_SERVICEREQUESTS } from '../../actions';

describe('serviceRequest reducer', () => {
  it('should return initial state', () => {
    const initialState = [];
    const action = {}
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  it('should add service requests to state', () => {
    const receiveServiceRequestState = [1, 2, 3];
    const action = {type: RECEIVE_SERVICEREQUESTS, serviceRequests:[ 1, 2, 3] };
    const state = reducer(undefined, action);
    expect(state).toEqual(receiveServiceRequestState);

  });
});
