const updatelistingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LISTINGINFO':
        console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  

  export default updatelistingReducer;