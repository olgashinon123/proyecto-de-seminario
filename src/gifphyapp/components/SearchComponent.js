import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";
import { actions } from "../actions/actions";
export const SearchComponent = () => {
  const [form, handlerChangeForm, resetForm] = useForm({ search: "" });
  const [uri, setUri] = useState("");
  //const { dispatch } = useContext(DataState);
  const { data, isLoading } = useFetch(uri);
  const { search } = form;
  //dispatch({ type: actions.SEARCH_FORM, payload: data });
  //useEffect(() => {
  // console.log("LOAD")
  //  dispatch({ type: actions.SEARCH_FORM, payload: data });
  //}, [isLoading]);
  const handlerSubmit = (e) => {
    e.preventDefault();
    setUri(
      `https://api.giphy.com/v1/gifs/search?api_key=S38bt9dV4Q062A9FZLl68mXgXRIqJVYY&q=${search}`
    );
    //dispatch({ type: actions.SEARCH_FORM, payload: data });
    resetForm();
  };
  return (
    <div className="row">
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput" className="form-label">
            Search Gifs
          </label>
          <input
            type="text"
            name="search"
            onChange={handlerChangeForm}
            value={search}
            className="form-control"
            autoComplete="off"
            id="exampleFormControlInput"
            placeholder="Search Gifs.."
          />
        </div>
      </form>
    </div>
  );
};
