"use client";

import React, { createContext, useContext, useState } from "react";
import { NearEarthObject } from "./types";

interface ListContextProps {
  listState: NearEarthObject[];
  setListState: React.Dispatch<React.SetStateAction<NearEarthObject[]>>;
}

const ListContext = createContext<ListContextProps | undefined>(undefined);

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listState, setListState] = useState<NearEarthObject[]>([]);

  return (
    <ListContext.Provider value={{ listState, setListState }}>{children}</ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
