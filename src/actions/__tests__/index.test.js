import * as actions from '../index';

describe('Action Creators', () => {
  it('should return action with service request', () => {
    const serviceRequests = [1, 3, 2];

    const expected = {
      type: actions.RECEIVE_SERVICEREQUESTS,
      serviceRequests
    };

    expect(actions.receiveServiceRequests(serviceRequests)).toEqual(expected);
  });
});
