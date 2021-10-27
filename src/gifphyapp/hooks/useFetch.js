import React, { useContext, useEffect, useState } from "react";
import { actions } from "../actions/actions";
import DataState from "../context/AppContext";
export const useFetch = (url) => {
  const [results, setResults] = useState({ data: null, isLoading: true });
  const { dispatch } = useContext(DataState);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log("=====>>>", data);
        //setResults({ ...results, data, isLoading: false });
        dispatch({ type: actions.SEARCH_FORM, payload: data });
      })
      .catch((error) => {
        console.log("ERROR");
        //setResults({ ...results, data: null, isLoading: false });
      });
  }, [url]);
  return results;
};

/*este hooks se enlaza con el SearchComponent..... que es para guardar*/
