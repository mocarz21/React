import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState'
import strContains from '../utils/strContains';


//selectors
export const getFilteredCards = (
    {cards, search}, columnId) =>cards.filter(card=>card.columnId===columnId && strContains(card.title, search)
  );

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
  
export const getAllColumns =(state) =>state.columns             //nie za bardzo zumiem ten zapis: (state) =>state.columns   ze co jest stan i z niego wyciagamy tablice Columns

export const getColumnsByList =({columns}, listId) => columns.filter(column => column.listId === listId)

export const getAllLists =(state) => state.lists
// action creators 
export const addColumn = payload =>({type: 'ADD_COLUMN', title: payload.title, icon: payload.icon, id: payload.listId, listId:payload.listId}); //nie rozumiem skad sie co bierze pzekazujemy dwa argumenty tu jest jeden nie czaje jak to działa
export const addCard = payload => ({type: 'ADD_CARD',title: payload.title, columnId: payload.columnId});
export const searchName = payload => ({type: 'SEARCH', search: payload.search})
export const addNewList = payload =>({type: 'ADD_LIST', title: payload.title, description: payload.description, id: payload.id})

export const cardFavorite = payload =>({type: 'TOGGLE_CARD_FAVORITE', id: payload.id})

const reducer = (state, payload) => {
  switch(payload.type){
    case 'ADD_COLUMN':
      return {...state, columns:[...state.columns, {title: payload.title, icon: payload.icon, id: shortid(), listId: payload.listId}]}; 
    case 'ADD_CARD' :
      return {...state, cards:[...state.cards, {title: payload.title, columnId: payload.columnId}]} 
    case 'SEARCH' :
      return {...state,  search: payload.search}  //chyba za bardzo nie rozumiem składni 
    case 'ADD_LIST' :
      return {...state, lists:[...state.lists,{title: payload.title, description: payload.description, id: shortid()}]}
    case 'TOGGLE_CARD_FAVORITE' :
     
      return { ...state, cards: state.cards.map(card => (card.id === payload.id) ? { ...card, isFavorite: !card.isFavorite, id: shortid()} : card) }; // nie rozumiem tego zapisu
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