import {selectedMapPoint, ticketNum, SRSummary} from '../index';
import {
  SELECT_MAP_POINT,
  UNSELECT_MAP_POINT,
  SEARCH_TICKET_NUM,
  SEARCH_TICKET_NUM_RESET,
  RECEIVE_SR_SUMMARY,
} from '../../actions';

describe('selectMapPoint reducer', () => {
  it('should return the initialState', () => {
    const initialState = null;
    const action = {};
    const state = selectedMapPoint(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should handle SELECT_MAP_POINT', () => {
    const prevTest = null;
    const expected = [{h: 'hello', n: 'name', b: 'ball'}];
    const action = {
      type: SELECT_MAP_POINT,
      selected: [{h: 'hello', n: 'name', b: 'ball'}],
    };
    const state = selectedMapPoint(prevTest, action);
    expect(state).toEqual(expected);
  });

  it('should handle UNSELECT_MAP_POINT', () => {
    const prevState = undefined;

    const expectedOutput = null;

    const action = {type: UNSELECT_MAP_POINT};

    expect(selectedMapPoint(prevState, action)).toEqual(expectedOutput);
  });

  it('should return the initial state', () => {
    const initialState = '';

    const action = {};

    expect(ticketNum(undefined, action)).toEqual(initialState);
  });

  it('should handle SEARCH_TICKET_NUM', () => {

    const prevState = undefined;

    const expectedOutput = {c: 'check', n: 'number', s: [1, 2, 3]};

    const action = {type: SEARCH_TICKET_NUM, ticketNum: expectedOutput};

    expect(ticketNum(prevState, action)).toEqual(expectedOutput);
  });

  it('should handle SEARCH_TICKET_NUM_RESET', () => {
    const prevState = '';

    const expectedOutput = '';

    const action = {type: SEARCH_TICKET_NUM_RESET};
    expect(ticketNum(prevState, action)).toEqual(expectedOutput);
  });

  it('should return the initial state', () => {
    const initialState = {};

    const action = {};

    expect(SRSummary(undefined, action)).toEqual(initialState);
  });

  it('should handle the RECEIVE_SR_SUMMARY', () => {

    const expected = {aveSr: [4, 87], r: 'request', s: 'summary'};

    const action = {type: RECEIVE_SR_SUMMARY, summary: expected};

    expect(SRSummary({}, action)).toEqual(expected);

  });
});
