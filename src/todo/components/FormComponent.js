import React, { useContext } from "react";
import DataTodo from "../contex/AppContext";
import { useForm } from "../hooks/useForm";
import { actions } from "../constants/actions";
export const FormComponent = () => {
  const user = useContext(DataTodo);
  const { state, dispatch } = useContext(DataTodo);
  const [form, handlerChangeForm, resetForm] = useForm({
    taskname: "",
    description: "",
    isDone: false,
  });
  const { taskname, description } = form;
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.ADD_TASK,
      payload: { ...form, id: new Date().getTime() },
    });
    resetForm();
  };
  return (
    <div className="todo__form">
      <h4>form task</h4>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="taskname">Task Name</label>
          <input
            className="todo__form-text"
            type="type"
            value={taskname}
            name="taskname"
            onChange={handlerChangeForm}
          />
        </div>
        <div>
          <label htmlFor="descriptio">Description</label>
          <textarea
            className="todo__form-text"
            name="description"
            value={description}
            onChange={handlerChangeForm}
          ></textarea>
        </div>
        <button type="submit">Create new task</button>
      </form>
    </div>
  );
};
