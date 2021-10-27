import React from "react";
import { ContainerCardComponent } from "./components/ContainerCardComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchComponent } from "./components/SearchComponent";
import { AppState } from "./context/AppState";
export const GifComponent = () => {
  return (
    <div className="container">
      <AppState>
        <HeaderComponent />
        <SearchComponent />
        <ContainerCardComponent />
      </AppState>
    </div>
  );
};
