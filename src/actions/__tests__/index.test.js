import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  receiveServiceRequests, RECEIVE_SERVICEREQUESTS,
  receiveJurisdictions, RECEIVE_JURISDICTIONS,
  receiveDateChange, MAP_DATE_FILTER_CHANGE,
  receiveStatuses, RECEIVE_STATUSES,
  receiveSRSummary, RECEIVE_SR_SUMMARY,
  fetchMapDataComplete, FETCH_MAP_DATA_COMPLETE,
  resetSearchTicketNum, SEARCH_TICKET_NUM_RESET,
  toggleJurisdiction, TOGGLE_JURISDICTION,
  toggleService, TOGGLE_SERVICE,
  toggleStatus, TOGGLE_STATUS,
  searchTicketNum, SEARCH_TICKET_NUM,
  fetchMapData, FETCH_MAP_DATA,
  resetStatuses, RESET_STATUSES,
  resetServices, RESET_SERVICES, reloadSRSummary,
} from '../index';
import { MAP_DATA_RELOAD } from '../../utils/constants';


// configure mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {

  describe('Synchoronus Actions', () => {

    it('should create an action to receive service request object', () => {
      const data = [1, 3, 2];
      const action = receiveServiceRequests(data);
      expect(action.type).toBe(RECEIVE_SERVICEREQUESTS);
      expect(action.serviceRequests).toEqual(data);
    });

    it('should create an action to reset services', () => {
      const action = resetServices();
      expect(action.type).toBe(RESET_SERVICES);
    });

    it('should create an action to receive jurisdictions', () => {
      const data = {};
      const action = receiveJurisdictions(data);
      expect(action.type).toBe(RECEIVE_JURISDICTIONS);
      expect(action.jurisdictions).toEqual(data);
    });

    it('should create an action to receive status', () => {
      const data = {};
      const action = receiveStatuses(data);
      expect(action.type).toBe(RECEIVE_STATUSES);
      expect(action.statuses).toEqual(data);
    });

    it('should create an action to reset status', () => {
      const action = resetStatuses();
      expect(action.type).toBe(RESET_STATUSES);
    });

    it('should create an action to to fetch map data', () => {
      const action = fetchMapData();
      expect(action.type).toBe(FETCH_MAP_DATA);
      expect(action.loading).toBeTruthy();
      expect(action.title).toBe(MAP_DATA_RELOAD);
    });

    it('should create an action to to end fetching map data', () => {
      const action = fetchMapDataComplete();
      expect(action.type).toBe(FETCH_MAP_DATA_COMPLETE);
      expect(action.loading).toBeFalsy();
      expect(action.dataFound).toBeTruthy();
    });

    it('should create an action to to receive SR summary', () => {
      const data = {};
      const action = receiveSRSummary(data);
      expect(action.type).toBe(RECEIVE_SR_SUMMARY);
      expect(action.summary).toBe(data);
    });

    it('should create an action to receive SR summary', () => {
      const dateOne = '30-05-2018';
      const dateTwo = '29-05-2018';
      const action = receiveDateChange(dateOne, dateTwo);
      expect(action.type).toBe(MAP_DATE_FILTER_CHANGE);
      expect(action.startDate).toBe(dateOne);
      expect(action.endDate).toBe(dateTwo);
    });

    it('should create an action to search tickeck number', () => {
      const data = {};
      const action = searchTicketNum(data);
      expect(action.type).toBe(SEARCH_TICKET_NUM);
      expect(action.ticketNum).toEqual(data);
    });

    it('should create an action to reset searching tickect number', () => {
      const action = resetSearchTicketNum();
      expect(action.type).toBe(SEARCH_TICKET_NUM_RESET);
    });

    it('should create an action to to toggle Service ', () => {
      const data = 123;
      const action = toggleService(data);
      expect(action.type).toBe(TOGGLE_SERVICE);
      expect(action.id).toBe(data);
    });

    it('should create an action to to toggle Jurisdiction ', () => {
      const data = 123;
      const action = toggleJurisdiction(data);
      expect(action.type).toBe(TOGGLE_JURISDICTION);
      expect(action.id).toBe(data);
    });

    it('should create an action to to toggle status ', () => {
      const data = 123;
      const action = toggleStatus(data);
      expect(action.type).toBe(TOGGLE_STATUS);
      expect(action.id).toBe(data);
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

      const expectedAction = [{ type: RECEIVE_SR_SUMMARY, summary: response }];

      return store.dispatch(reloadSRSummary()).then(() => {
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

      const expectedAction = [{ type: RECEIVE_SR_SUMMARY, summary: response }];

      return store.dispatch(reloadSRSummary()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
