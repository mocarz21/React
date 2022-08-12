import shortid from "shortid";

//selectors
export const getAllColumns =(state) =>state.columns             //nie za bardzo zumiem ten zapis: (state) =>state.columns   ze co jest stan i z niego wyciagamy tablice Columns
export const getColumnsByList =({columns}, listId) => columns.filter(column => column.listId === listId)

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'add/columns/ADD_COLUMN':
        return [...statePart, { ...action, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer;