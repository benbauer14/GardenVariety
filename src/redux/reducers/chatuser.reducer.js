const chatuserReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_USERCHAT':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default chatuserReducer;