/*es solo una funcion que controla estados */
import { actions } from "../constants/actions";
export const AppReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TASK: {
      return [...state, action.payload];
    }
    case actions.REMOVE_TASK: {
      return state.filter((item) => item.id !== action.payload);
    }
    case actions.IS_DONE: {
      const newState = state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};
