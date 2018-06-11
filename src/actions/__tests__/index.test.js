import fetchMock from 'fetch-mock';
import moment from 'moment';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from '../index';
import { MAP_DATA_RELOAD } from '../../utils/constants';


// configure mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('Synchoronus Actions', () => {
    it('should create an action to receive service request object', () => {
      const data = [1, 3, 2];
      const expectedAction = {
        type: actions.RECEIVE_SERVICEREQUESTS,
        serviceRequests: data,
      };
      expect(actions.receiveServiceRequests(data)).toEqual(expectedAction);
    });

    it('should create an action to reset services', () => {
      const expectedAction = { type: actions.RESET_SERVICES };
      expect(actions.resetServices()).toEqual(expectedAction);
    });

    it('should create an action to receive jurisdictions', () => {
      const data = {};
      const expectedAction = {
        type: actions.RECEIVE_JURISDICTIONS,
        jurisdictions: data,
      };
      expect(actions.receiveJurisdictions(data)).toEqual(expectedAction);
    });

    it('should create an action to receive status', () => {
      const data = {};
      const expectedAction = {
        type: actions.RECEIVE_STATUSES,
        statuses: data,
      };
      expect(actions.receiveStatuses(data)).toEqual(expectedAction);
    });

    it('should create an action to reset status', () => {
      const expectedAction = { type: actions.RESET_STATUSES };
      expect(actions.resetStatuses()).toEqual(expectedAction);
    });

    it('should create an action to to fetch map data', () => {
      const expectedAction = {
        type: actions.FETCH_MAP_DATA,
        loading: true,
        title: MAP_DATA_RELOAD,
      };
      expect(actions.fetchMapData()).toEqual(expectedAction);
    });

    it('should create an action to to end fetching map data', () => {
      const expectedAction = {
        type: actions.FETCH_MAP_DATA_COMPLETE,
        loading: false,
        dataFound: true,
      };
      expect(actions.fetchMapDataComplete()).toEqual(expectedAction);
    });

    it('should create an action to to receive SR summary', () => {
      const data = {};
      const expectedAction = {
        type: actions.RECEIVE_SR_SUMMARY,
        summary: data,
      };
      expect(actions.receiveSRSummary(data)).toEqual(expectedAction);
    });

    it('should create an action to receive SR summary', () => {
      const dateOne = '30-05-2018';
      const dateTwo = '29-05-2018';
      const expectedAction = {
        type: actions.MAP_DATE_FILTER_CHANGE,
        startDate: dateOne,
        endDate: dateTwo,
      };
      expect(actions.receiveDateChange(dateOne, dateTwo)).toEqual(expectedAction);
    });

    it('should create an action to search tickeck number', () => {
      const data = {};
      const expectedAction = {
        type: actions.SEARCH_TICKET_NUM,
        ticketNum: data,
      };
      expect(actions.searchTicketNum(data)).toEqual(expectedAction);
    });

    it('should create an action to reset searching tickect number', () => {
      const expectedAction = {
        type: actions.SEARCH_TICKET_NUM_RESET,
      };
      expect(actions.resetSearchTicketNum()).toEqual(expectedAction);
    });

    it('should create an action to to toggle Service ', () => {
      const data = 123;
      const expectedAction = {
        type: actions.TOGGLE_SERVICE,
        id: data,
      };
      expect(actions.toggleService(data)).toEqual(expectedAction);
    });

    it('should create an action to to toggle Jurisdiction ', () => {
      const data = 123;
      const expectedAction = {
        type: actions.TOGGLE_JURISDICTION,
        id: data,
      };
      expect(actions.toggleJurisdiction(data)).toEqual(expectedAction);
    });

    it('should create an action to to toggle status ', () => {
      const data = 123;
      const expectedAction = {
        type: actions.TOGGLE_STATUS,
        id: data,
      };
      expect(actions.toggleStatus(data)).toEqual(expectedAction);
    });
  });

  describe('Asynchronous Actions', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it('should dispatch RECEIVE_SR_SUMMARY action when startDate and endDate are null', () => {
      const url = 'api/reports/overviews';
      const response = { name: 'test' };
      fetchMock.getOnce(url, { body: response, headers: { 'content-type': 'application/json' } });

      const store = mockStore({
        summary: {},
        dateFilter: {
          startDate: null,
          endDate: null,
        },
      });

      const expectedAction = [{ type: actions.RECEIVE_SR_SUMMARY, summary: response }];

      return store.dispatch(actions.reloadSRSummary()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should dispatch RECEIVE_SR_SUMMARY action when start date and end date are defined', () => {
      const startDate = new Date();
      const endDate = startDate;

      const query = { createdAt: { $gte: endDate, $lte: startDate } };
      const url = `api/reports/overviews?query=${JSON.stringify(query)}`;
      const response = { name: 'test' };
      fetchMock.getOnce(url, { body: response, headers: { 'content-type': 'application/json' } });

      const store = mockStore({
        summary: {},
        dateFilter: {
          startDate,
          endDate,
        },
      });

      const expectedAction = [{ type: actions.RECEIVE_SR_SUMMARY, summary: response }];

      return store.dispatch(actions.reloadSRSummary()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should dispatch SERVICE_REQUEST_RECEIVE action', () => {
      const startDate = moment().subtract(1, 'months').startOf('date');
      const endDate = moment();
      const response = { servicerequests: [{ name: 'test' }] };

      fetchMock.get('*', { body: response, headers: { 'content-type': 'application/json' } });

      const expectedActions = [{
        type: actions.RECEIVE_SERVICEREQUESTS,
        serviceRequests: response.servicerequests,
      },
      {
        type: actions.FETCH_MAP_DATA_COMPLETE,
        loading: false,
        dataFound: true,
      },
      ];
      const store = mockStore({
        serviceRequests: [],
        dateFilter: {
          startDate,
          endDate,
        },
        serviceFilter: {
          services: [],
        },
        jurisdictionFilter: {
          jurisdictions: [],
        },
        statusFilter: {
          statuses: [],
        },
        mapData: {
          loading: false,
          dataFound: true,
        },
        selectedMapPoint: null,
        ticketNum: '',
        SRSummary: {},
        router: {
          location: {
            pathname: '/',
            search: '',
            hash: '',
          },
        },
      });
      return store.dispatch(actions.getServiceRequests(true)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
