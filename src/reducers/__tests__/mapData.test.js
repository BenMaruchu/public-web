import { FETCH_MAP_DATA, FETCH_MAP_DATA_COMPLETE } from './../../actions/index';
import mapData from './../mapData';

describe('Map Data Test', () => {

  it('should return initial state', () => {
    const initialState = { loading: false, dataFound: true }
    expect(mapData(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MAP_DATA action', () => {
    const previousState = { loading: false, title: '' }
    const expectOutput = { loading: true, title: '' }

    expect(mapData(previousState, {
      type: FETCH_MAP_DATA,
      loading: true,
      title: ''
    })).toEqual(expectOutput);
  });

  it('should handle FETCH_MAP_DATA_COMPLETE action', () => {
    const previousState = { loading: true, dataFound: false }
    const expectOutput = { loading: false, dataFound: true }
    expect(mapData(previousState, {
      type: FETCH_MAP_DATA_COMPLETE,
      loading: false,
      dataFound: true
    })).toEqual(expectOutput);
  });

})
