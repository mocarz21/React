import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState'
import strContains from '../utils/strContains';
//selectors
export const getFilteredCards = (
    {cards, search}, columnId) =>cards.filter(card=>card.columnId===columnId && strContains(card.title, search)
  );
export const getAllColumns =(state) =>state.columns             //nie za bardzo zumiem ten zapis: (state) =>state.columns   ze co jest stan i z niego wyciagamy tablice Columns
// action creators 
export const addColumn = payload =>({type: 'ADD_COLUMN',payload}) //nie rozumiem skad sie co bierze pzekazujemy dwa argumenty tu jest jeden nie czaje jak to działa
export const addCard = payload => ({type: 'ADD_CARD',payload}) 

const reducer = (state, payload) => {
  switch(payload.type){
    case 'ADD_COLUMN':
      return {...state, columns:[...state.columns, {...payload.newColumn, id: shortid()}]}; {/*po co drugie nawiasy {} */}  
    case 'ADD_CARD' :
      return {...state, cards:[...state.cards, payload.newCard]}
    case 'SEARCH' :
      return {...state, search: payload.searchName}
    default:
      return state;

  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;