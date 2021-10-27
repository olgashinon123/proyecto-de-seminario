import React from "react";
import DataTodo from "./contex/AppContext";
import { MainComponent } from "./components/MainComponent";
import { AppState } from "./contex/AppState";
import "./styles.css";
export const TodoComponent = () => {
  return (
    <AppState>
      <MainComponent />;
    </AppState>
  );
};
