import React, { useContext } from "react";
import { CardComponent } from "./CardComponent";
import DataState from "../context/AppContext";
export const ContainerCardComponent = () => {
  const { state } = useContext(DataState);
  console.log(state);
  return (
    <div className="row align-items-start">
      {state &&
        state.data &&
        state.data.map((item) => {
          return <CardComponent key={item.id} {...item} />;
        })}
    </div>
  );
};
