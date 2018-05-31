import dateFilter, { initialState } from '../dateFilter';
import MAP_DATE_FILTER_CHANGE from './../../actions/index';
import moment from 'moment';

describe('Date Filter', () => {

  const startDate = moment().subtract(1, 'months').startOf('date');
  const endDate = moment();

  it('should return the initial state', () => {
    expect(dateFilter(undefined, {})).toEqual(initialState);
  });

  it('should handle MAP_DATE_FILTER_CHANGE action', () => {
    expect(dateFilter({ startDate, endDate }, {
      type: MAP_DATE_FILTER_CHANGE,
      startDate: startDate,
      endDate: endDate
    })).toEqual({ startDate, endDate });
  });
});
