import { selectedMapPoint, ticketNum, SRSummary } from '../index';
import {
  SELECT_MAP_POINT,
  UNSELECT_MAP_POINT,
  SEARCH_TICKET_NUM,
  SEARCH_TICKET_NUM_RESET,
  RECEIVE_SR_SUMMARY,
  RECEIVE_STATUSES,
} from '../../actions/index';

describe('Index', () => {
  describe('SelectMapPoint reducer', () => {
    it('should return the initialState', () => {
      const action = {};

      const invalidAction = { type: RECEIVE_STATUSES };

      expect(selectedMapPoint(undefined, action)).toBeNull();

      expect(selectedMapPoint(undefined, invalidAction)).toBeNull();
    });

    it('should handle SELECT_MAP_POINT', () => {
      const prevTest = { name: 'Dar', lat: 39.09, log: -6.0338 };

      const expected = { name: 'kimara' };

      const action = {
        type: SELECT_MAP_POINT,
        selected: { name: 'kimara' },
      };

      const state = selectedMapPoint(prevTest, action);

      expect(state).toEqual(expected);
    });

    it('should handle UNSELECT_MAP_POINT', () => {
      const prevState = { selected_point: 10, unselected_point: 0 };

      const action = { type: UNSELECT_MAP_POINT };

      expect(selectedMapPoint(prevState, action)).toBeNull();
    });
  });

  describe('TicketNum reducer', () => {
    it('should return the initial state', () => {
      const initialState = '';

      const action = {};

      const invalidAction = { type: SELECT_MAP_POINT, selected: 12 };

      expect(ticketNum(undefined, action)).toBe(initialState);

      expect(ticketNum(undefined, invalidAction)).toBe(initialState);
    });

    it('should handle SEARCH_TICKET_NUM', () => {
      const prevState = '';

      const expectedOutput = '1';

      const action = { type: SEARCH_TICKET_NUM, ticketNum: '1' };

      expect(ticketNum(prevState, action)).toBe(expectedOutput);

      const previousState = '1';

      expect(ticketNum(previousState, { type: SEARCH_TICKET_NUM, ticketNum: '2' })).toBe('2');
    });

    it('should handle SEARCH_TICKET_NUM_RESET', () => {
      const prevState = '2';

      const expectedOutput = '';

      const action = { type: SEARCH_TICKET_NUM_RESET };

      expect(ticketNum(prevState, action)).toBe(expectedOutput);
    });
  });

  describe('SRSummary reducer', () => {
    it('should return the initial state for new SRsummary', () => {
      const initialState = {};

      const action = {};

      const invalidAction = { type: SEARCH_TICKET_NUM_RESET };

      expect(SRSummary(undefined, action)).toEqual(initialState);

      expect(SRSummary(undefined, invalidAction)).toEqual(initialState);
    });

    it('should handle the RECEIVE_SR_SUMMARY', () => {
      const expected = {
        summary: [
          {
            id: '59f', pending: 8, resolved: 0, late: 0, unattended: 8,
          }],
      };

      const action = { type: RECEIVE_SR_SUMMARY, summary: expected };

      const expectedOutput = {
        services: [
          {
            id: '59f', pending: 8, resolved: 0, late: 0, unattended: 8,
          },
          {
            id: '597', pending: 40, resolved: 0, late: 0, unattended: 40,
          }],
      };
      expect(SRSummary({}, action)).toEqual(expected);

      expect(SRSummary({
        services: [
          {
            id: '59d', pending: 246, resolved: 217, late: 0, unattended: 3,
          },
        ],
      }, { type: RECEIVE_SR_SUMMARY, summary: expectedOutput })).toEqual(expectedOutput);
    });
  });
});
