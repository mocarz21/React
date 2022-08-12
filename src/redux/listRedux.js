import shortid from "shortid";
//action
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//selectors
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists =(state) => state.lists

// action creators 
const listsReducer = (statePart = [], action) =>{
    
    switch(action.type){
      case ADD_LIST:
        return[...statePart,{...action, id: shortid()}]
        default:
          return statePart
    }
    
  }
  

  export default listsReducer;