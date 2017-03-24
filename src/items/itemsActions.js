import { ITEMS_REQUEST, ITEMS_RESOLVE, ITEMS_REJECT,
  CREATE_ITEMS_RESOLVE, CREATE_ITEMS_REJECT,
  UPDATE_ITEMS_RESOLVE, UPDATE_ITEMS_REJECT,
  REMOVE_ITEMS_RESOLVE, REMOVE_ITEMS_REJECT } from './itemsTypes'
import backand from '@backand/vanilla-sdk'

// add custom actions here!

// generated actions
export const getItems = (options = {}) => {
  return dispatch => {
    dispatch({
      type: ITEMS_REQUEST,
    })
    backand.object.getList('items', options)
      .then(response => {
        dispatch({
          type: ITEMS_RESOLVE,
          payload: {
            data: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: ITEMS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const createItems = (data, options = {}, parameters) => {
  return dispatch => {
    backand.object.create('items', data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: CREATE_ITEMS_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: CREATE_ITEMS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const updateItems = (id, data, options = {}, parameters) => {
  return dispatch => {
    backand.object.update('items', id, data, options, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: UPDATE_ITEMS_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_ITEMS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const removeItems = (id, parameters) => {
  return dispatch => {
    backand.object.remove('items', id, parameters)
      .then(response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: REMOVE_ITEMS_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      })
      .catch(error => {
        dispatch({
          type: REMOVE_ITEMS_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}
