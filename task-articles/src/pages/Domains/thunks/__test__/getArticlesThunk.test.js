import thunk from 'redux-thunk'; 
import moxios from 'moxios'; 
import configureMockStore from 'redux-mock-store';  
import getArticlesThunk from './../getArticlesThunk';
import { client } from './../../../../services/client';

 
const middleware = [thunk]; 
const mockStore = configureMockStore(middleware); 
const initialState = { 
  data: [], 
  loading: false, 
  error: "",
}; 
 
describe('Test note Actions', () => { 
  let store; 
  beforeEach(() => { 
    moxios.install(client); 
    store = mockStore(initialState); 
  }); 
  afterEach(() => { 
    moxios.uninstall(); 
  }); 
 
  it("Loads all notes correctly", (done) => { 
    moxios.wait(() => { 
      const request = moxios.requests.mostRecent(); 
      request.respondWith({ 
        status: 200, 
        response: { 
          data: [ 
            { 
              uuid: '98f89493-d557-4624-8cf6-005b0ae92895', 
              name: 'string', 
              author: 'string', 
              description: 'string', 
              createDate: '2021-11-26T09:55:07.213Z', 
            }], 
        }, 
      }); 
    }); 
 
    const expectedActions = [ 
      { 
        type: "ARTICLES_FETCH_START", 
      }, 
      { 
        payload: [ 
          { 
            uuid: '98f89493-d557-4624-8cf6-005b0ae92895', 
            name: 'string', 
            author: 'string', 
            description: 'string', 
            createDate: '2021-11-26T09:55:07.213Z', 
          }], 
 
        type: "ARTICLES_FETCH_SUCCESS", 
      }, 
    ]; 
    store.dispatch(getArticlesThunk()).then(() => { 
      const actualAction = store.getActions(); 
      expect(actualAction).toEqual(expectedActions); 
      done(); 
    }); 
  }); 
});

// {
//     getState: [Function: getState], state {data: [], loading: false, error: "",}
//     getActions: [Function: getActions], []
//     dispatch: [Function (anonymous)],
//     clearActions: [Function: clearActions],
//     subscribe: [Function: subscribe],
//     replaceReducer: [Function: replaceReducer]
//   }