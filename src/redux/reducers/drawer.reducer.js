const drawerReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_DRAWER':
        return true;
      case 'UNSET_DRAWER':
        return false;
      default:
        return state;
    }
  };
  

  export default drawerReducer;