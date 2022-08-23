import shortid from "shortid";


//selectors
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists =(state) => state.lists

// action creators 
const listsReducer = (statePart = [], action) =>{
    
    switch(action.type){
      case 'app/cards/RREMOVE':
        return[...statePart,{...action, id: shortid()}]
        default:
          return statePart
    }
    
  }
  

  export default listsReducer;