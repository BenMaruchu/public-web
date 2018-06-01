import serviceFilter from '../serviceFilter';
import { RECEIVE_SERVICES, TOGGLE_SERVICE, RESET_SERVICES } from '../../actions/index';

describe('Jurisdiction Filter ', () => {
  const initialState = { services: [] };

  it('should return the initial state', () => {
    expect(serviceFilter(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_SERVICES action', () => {
    const initialState = {
      services: [
        {
          id: 1,
          name: 'Test'
        }
      ]
    };
    const action = {
      type: RECEIVE_SERVICES,
      services: initialState.services
    }
    expect(serviceFilter(initialState, action)).toEqual(initialState);
  });

  it('should handle TOGGLE_SERVICE action', () => {
    const initialState = {
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
    expect(serviceFilter(initialState, action)).toEqual(expectOutput)
  });

  it('should handle RESET_SERVICE action', () => {
    const initialState = {
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
    expect(serviceFilter(initialState, action)).toEqual(expectOutput)
  });

});
