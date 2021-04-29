const unreadReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_UNREAD':
        
        return action.payload;
      default:
        return state;
    }
  };
  

  export default unreadReducer;