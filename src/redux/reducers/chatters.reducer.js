const chattersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CHATTERS': 
        return action;
      default:
        return state;
    }
  };
  

  export default chattersReducer;