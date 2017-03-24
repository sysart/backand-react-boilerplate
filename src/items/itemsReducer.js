import { ITEMS_REQUEST, ITEMS_RESOLVE, ITEMS_REJECT,
  CREATE_ITEMS_RESOLVE, CREATE_ITEMS_REJECT,
  UPDATE_ITEMS_RESOLVE, UPDATE_ITEMS_REJECT,
  REMOVE_ITEMS_RESOLVE, REMOVE_ITEMS_REJECT } from './itemsTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case ITEMS_REQUEST:
      return {...state, loading: true};
    case ITEMS_RESOLVE:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        loaded: true
      });
    case ITEMS_REJECT:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
        loaded: false
      });
    case CREATE_ITEMS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case CREATE_ITEMS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case UPDATE_ITEMS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case UPDATE_ITEMS_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case REMOVE_ITEMS_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
	    // let newData = state.data.filter(item => item.id != action.payload.data.id);
      // return Object.assign({}, state, {
      //   data: newData
      // });
  	case REMOVE_ITEMS_REJECT:
        return Object.assign({}, state, {
          error: action.payload.error
        });
    default:
      return state;
  }
}
