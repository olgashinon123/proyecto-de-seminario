import React from "react";
import { actions } from "../actions/actions";
/*esta es la peticion de search*/
export const AppReducer = (state, action) => {
  switch (action.type) {
    case actions.SEARCH_FORM: {
      const { payload } = action;
      return { ...state, data: payload };
    }
    default: {
      return state;
    }
  }
};
