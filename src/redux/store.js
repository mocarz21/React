import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState'
const reducer = (state, payload) => {
  switch(payload.type){
    case 'ADD_COLUMN':
      return {...state, columns:[...state.columns, {...payload.newColumn, id: shortid()}]}; {/*po co drugie nawiasy {} */}  
    case 'ADD_CARD' :
      return {...state, cards:[...state.cards, payload.newCard]}
    default:
      return state;

  }
  // if(payload.type ==='ADD_COLUMN') return {...state, columns:[...state.columns, {...payload.newColumn, id: shortid()}]}; {/*po co drugie nawiasy{} */}
  // if(payload.type ==='ADD_CARD') return{...state, cards:[...state.cards, payload.newCard]}
  // return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;