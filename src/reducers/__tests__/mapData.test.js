import { FETCH_MAP_DATA, FETCH_MAP_DATA_COMPLETE } from './../actions/index';
import mapData, { initialState } from './mapData';

describe('Map Data Test', () => {
  const loading = true;
  const title = '';
  const dataFound = true;

  it('should return initial state', () => {
    expect(mapData(undefined, {})).toEqual(initialState);
  });
  it('should handle FETCH_MAP_DATA action', () => {
    expect(mapData({ loading, title }, {
      type: FETCH_MAP_DATA,
      loading: loading,
      title: title
    })).toEqual({ loading, title });
  });

  it('should handle FETCH_MAP_DATA_COMPLETE action', () => {
    expect(mapData({ loading, dataFound }, {
      type: FETCH_MAP_DATA_COMPLETE,
      loading: loading,
      dataFound: dataFound
    })).toBeTruthy();
    // })).toEqual({ loading, dataFound });
  });

})
