import React from "react";
import { FormComponent } from "./FormComponent";
import { TasksComponent } from "./TasksComponent";

export const MainComponent = () => {
  return (
    <>
      <div>
        <h1>Todo app</h1>
        <hr />
      </div>
      <div className="todo__container">
        <TasksComponent />
        <FormComponent />
      </div>
    </>
  );
};
