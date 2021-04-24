const listingReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_LISTING':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default listingReducer;