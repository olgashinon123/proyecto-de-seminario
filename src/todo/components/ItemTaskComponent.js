import React, { useContext } from "react";
import DataTodo from "../contex/AppContext";
import { MdDelete, MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { actions } from "../constants/actions";
export const ItemTaskComponent = ({ taskname, description, isDone, id }) => {
  const { state, dispatch } = useContext(DataTodo);
  const handlerClick = (id) => {
    dispatch({ type: actions.REMOVE_TASK, payload: id });
  };
  const handlerClickIsDone = (id) => {
    dispatch({ type: actions.IS_DONE, payload: id });
  };
  return (
    <li
      onClick={() => {
        handlerClickIsDone(id);
      }}
    >
      {isDone ? <MdBookmark /> : <MdBookmarkBorder />}{" "}
      {isDone ? (
        <span className="isDone">{taskname}</span>
      ) : (
        <span>{taskname}</span>
      )}
      <div className="deleteIcon">
        <MdDelete
          onClick={() => {
            handlerClick(id);
          }}
        />
      </div>
    </li>
  );
};
