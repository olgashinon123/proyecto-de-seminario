import React, { useEffect, useReducer } from "react";
import DataTodo from "./AppContext";
import { AppReducer } from "./AppReducer";
export const AppState = (props) => {
  console.log("check", localStorage.getItem("tododb"));
  const initSateString = localStorage.getItem("tododb") || [];
  const init = JSON.parse(initSateString);
  const [state, dispatch] = useReducer(AppReducer, init);
  useEffect(() => {
    localStorage.setItem("tododb", JSON.stringify(state));
  }, [state]);
  return (
    <DataTodo.Provider value={{ state, dispatch }}>
      {props.children}
    </DataTodo.Provider>
  );
};
