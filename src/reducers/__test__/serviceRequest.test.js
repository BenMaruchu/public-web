import reducer from '../serviceRequests';
import { receiveServiceRequests } from '../../actions';

const receiveServiceRequestState = [1, 2, 3];
const initialState = [];
describe('serviceRequest reducer', () => {
  it('should return initial state', () => {
    const action = {}
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  it('should add service requests to state', () => {
    const action = receiveServiceRequests([1, 2, 3]);
    const state = reducer(initialState, action);
    expect(state).toEqual(receiveServiceRequestState);

  });
});
