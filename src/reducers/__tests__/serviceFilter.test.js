import serviceFilter from '../serviceFilter';
import { RECEIVE_SERVICES, TOGGLE_SERVICE, RESET_SERVICES } from '../../actions/index';

describe('Jurisdiction Filter ', () => {
  const initialState = { services: [] };

  it('should return the initial state', () => {
    expect(serviceFilter(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_SERVICES action', () => {
    const previousState = {
      services: [
        {
          id: 1,
          name: 'Test'
        }
      ]
    };
    const action = {
      type: RECEIVE_SERVICES,
      services: previousState.services
    }
    expect(serviceFilter(previousState, action)).toEqual(previousState);
  });

  it('should handle TOGGLE_SERVICE action', () => {
    const previousState = {
      services: [
        {
          id: 1,
          name: 'Test'
        }
      ]
    };
    const expectOutput = {
      services: [
        {
          id: 1,
          name: 'Test',
          selected: true
        }
      ]
    };
    const action = {
      type: TOGGLE_SERVICE,
      id: 1
    };
    expect(serviceFilter(previousState, action)).toEqual(expectOutput)
  });

  it('should handle RESET_SERVICE action', () => {
    const previousState = {
      services: [
        {
          id: 1,
          name: 'Test',
          selected: true
        }
      ]
    };
    const expectOutput = {
      services: [
        {
          id: 1,
          name: 'Test',
          selected: false
        }
      ]
    };
    const action = {
      type: TOGGLE_SERVICE,
      id: 1
    };
    expect(serviceFilter(previousState, action)).toEqual(expectOutput)
  });

});
