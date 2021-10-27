import React, { useContext } from "react";
import DataTodo from "../contex/AppContext";
import { ItemTaskComponent } from "./ItemTaskComponent";
export const TasksComponent = () => {
  const { state, dispatch } = useContext(DataTodo);
  console.log(state);
  return (
    <div className="todo__list">
      <span>Sistem of task name</span>
      <ul>
        {state.map((item) => {
          return <ItemTaskComponent key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};
