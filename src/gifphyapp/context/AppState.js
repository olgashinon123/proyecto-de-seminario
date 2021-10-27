import React, { useReducer } from "react";
import { AppReducer } from "./AppReducer";
import DataState from "./AppContext";
export const AppState = (props) => {
  const [state, dispatch] = useReducer(AppReducer, null);
  //const [uri, setUri] = useState(
  //  "https://api.giphy.com/v1/gifs/search?api_key=S38bt9dV4Q062A9FZLl68mXgXRIqJVYY&q=breaking bad"
  //);
  //const { data, isLoading } = useFetch(uri);

  return (
    <DataState.Provider value={{ state, dispatch }}>
      {props.children}
    </DataState.Provider>
  );
};
