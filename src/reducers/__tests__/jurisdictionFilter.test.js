import jurisdictionFilter from '../jurisdictionFilter';
import { RECEIVE_JURISDICTIONS, TOGGLE_JURISDICTION, RESET_JURISDICTIONS } from '../../actions/index';

describe('Jurisdiction Filter ', () => {
  it('should return the initial state', () => {
    const initialState = { jurisdictions: [] };
    expect(jurisdictionFilter(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_JURISDICTIONS action', () => {
    const initialState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
        },
        {
          id: 2,
          name: 'Test 2',
        },
      ],
    };
    const action = {
      type: RECEIVE_JURISDICTIONS,
      jurisdictions: initialState.jurisdictions,
    };
    expect(jurisdictionFilter(initialState, action)).toEqual(initialState);
  });

  it('should handle TOGGLE_JURISDICTION action', () => {
    const initialState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
        },
      ],
    };
    const expectOutput = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: true,
        },
      ],
    };
    const action = {
      type: TOGGLE_JURISDICTION,
      id: 1,
    };
    expect(jurisdictionFilter(initialState, action)).toEqual(expectOutput);
  });

  it('should handle RESET_JURISDICTIONS action', () => {
    const previousState = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: false,
        },
      ],
    };

    const expectOutput = {
      jurisdictions: [
        {
          id: 1,
          name: 'Test 1',
          selected: false,
        },
      ],
    };

    const action = {
      type: RESET_JURISDICTIONS,
      id: 1,
    };
    expect(jurisdictionFilter(previousState, action)).toEqual(expectOutput);
  });
});
