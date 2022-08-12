import shortid from 'shortid';
import initialState from './initialState'
import { createStore, combineReducers } from 'redux';
import listsReducer from './listRedux.js'
import cardsReducer from './cardsReducer.js'
import columnsReducer from './columnsReducer.js'
import searchStringReducer from './searchStringReducer.js'




//selectors

// action creators 
export const addColumn = payload =>({type: 'add/columns/ADD_COLUMN', title: payload.title, icon: payload.icon, id: payload.listId, listId:payload.listId}); //nie rozumiem skad sie co bierze pzekazujemy dwa argumenty tu jest jeden nie czaje jak to działa
export const addCard = payload => ({type: 'app/cards/ADD_CARD',title: payload.title, columnId: payload.columnId});
export const searchName = payload => ({type: 'app/search/SEARCH', search: payload.search})
export const addNewList = payload =>({type: 'app/lists/ADD_LIST', title: payload.title, description: payload.description, id: shortid()})
export const removeCard = payload =>({type: 'app/cards/RREMOVE', id: payload.id})
export const cardFavorite = payload =>({type: 'TOGGLE_CARD_FAVORITE', id: payload.id})









const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  search: searchStringReducer
  
}
const reducer = combineReducers(subreducers);





  // switch(payload.type){
  //   case 'ADD_COLUMN':
  //     return {...state, columns:[...state.columns, {title: payload.title, icon: payload.icon, id: shortid(), listId: payload.listId}]}; 
  //   case 'ADD_CARD' :
  //     return {...state, cards:[...state.cards, {title: payload.title, columnId: payload.columnId}]} 
  //   case 'SEARCH' :
  //     return {...state,  search: payload.search}  //chyba za bardzo nie rozumiem składni 
  //   case 'ADD_LIST' :
  //     return {...state, lists:[...state.lists,{title: payload.title, description: payload.description, id: shortid()}]}
  //   case 'TOGGLE_CARD_FAVORITE' :  
  //     return { ...state, cards: state.cards.map(card => (card.id === payload.id) ? { ...card, isFavorite: !card.isFavorite, id: shortid()} : card) }; // nie rozumiem tego zapisu
  //   default:
  //     return state;
  // }
// };


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;