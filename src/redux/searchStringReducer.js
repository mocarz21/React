const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'app/search/SEARCH':
        return action.search
      default:
        return statePart;
      }
    }


    export default searchStringReducer;