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
export const addColumn = payload =>({type: 'ADD_COLUMN', title: payload.title, icon: payload.icon}); //nie rozumiem skad sie co bierze pzekazujemy dwa argumenty tu jest jeden nie czaje jak to działa
export const addCard = payload => ({type: 'ADD_CARD',title: payload.title, columnId: payload.columnId});
export const searchName = payload => ({type: 'SEARCH', search: payload.search})

const reducer = (state, payload) => {
  switch(payload.type){
    case 'ADD_COLUMN':
      return {...state, columns:[...state.columns, {title: payload.title, icon: payload.icon, id: shortid()}]}; {/*po co drugie nawiasy {} */}  
    case 'ADD_CARD' :
      console.log(payload)
      return {...state, cards:[...state.cards, {title: payload.title, columnId: payload.columnId}]} 
    case 'SEARCH' :
      return {...state,  search: payload.search}  //chyba za bardzo nie rozumiem składni
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