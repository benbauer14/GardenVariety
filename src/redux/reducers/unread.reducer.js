const unreadReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
      case 'SET_UNREAD':
        
        return action.payload;
      default:
        return state;
    }
  };
  

  export default unreadReducer;