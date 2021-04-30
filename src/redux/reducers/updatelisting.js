const updatelistingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LISTINGINFO':
        console.log(action.payload)
        return action.payload;
        case 'RESET_LISTINGINFO':
          return []
      default:
        return state;
    }
  };
  

  export default updatelistingReducer;