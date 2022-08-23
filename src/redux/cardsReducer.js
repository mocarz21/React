import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = (
    {cards, search}, columnId) =>cards.filter(card=>card.columnId===columnId && strContains(card.title, search)
);

// action creators 
const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'app/cards/ADD_CARD':
        return [...statePart, { ...action, id: shortid() }];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.id) ? { ...card, isFavorite: !card.isFavorite, id: shortid()} : card);
      case 'app/cards/RREMOVE':
        return statePart.filter(card =>(card.id !== action.id))  
      default:
        return statePart;
    }
  }

  export default cardsReducer;