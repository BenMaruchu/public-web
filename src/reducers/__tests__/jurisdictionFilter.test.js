import jurisdictionFilter from '../jurisdictionFilter';
import { RECEIVE_JURISDICTIONS, TOGGLE_JURISDICTION, RESET_JURISDICTIONS } from '../../actions/index';

describe('Jurisdiction Filter ', () => {
  const initialState = { jurisdictions: [] };

  it('should return the initial state', () => {
    expect(jurisdictionFilter(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_JURISDICTIONS action', () => {
    const initialState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1'
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ]
    };
    const action = {
      type: RECEIVE_JURISDICTIONS,
      jurisdictions: initialState.jurisdictions
    }
    expect(jurisdictionFilter(initialState, action)).toEqual(initialState);
  });

  it('should handle TOGGLE_JURISDICTION action', () => {
    const initialState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1'
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ]
    };
    const expectOutput = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: true
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ]
    };
    const action = {
      type: TOGGLE_JURISDICTION,
      id: 1
    };
    expect(jurisdictionFilter(initialState, action)).toEqual(expectOutput)
  });

  it('should handle RESET_JURISDICTION action', () => {
    const initialState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: true
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ]
    };
    const expectOutput = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: false
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ]
    };
    const action = {
      type: TOGGLE_JURISDICTION,
      id: 1
    };
    expect(jurisdictionFilter(initialState, action)).toEqual(expectOutput)
  });

});
