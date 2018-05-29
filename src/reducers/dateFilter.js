import { MAP_DATE_FILTER_CHANGE } from '../actions/index';

import moment from 'moment';

const startDate = moment().subtract(1, 'months').startOf('date');
const endDate = moment();

export const initialState = {
  startDate, endDate
};

const mapFilter = (state = initialState, action) => {
  switch (action.type) {
    case MAP_DATE_FILTER_CHANGE:
      return { ...state, startDate: action.startDate, endDate: action.endDate };
    default:
      return state;
  }
};

export default mapFilter;
