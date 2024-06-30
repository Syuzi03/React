import type { IContextType } from "./types";
import React from "react";

export const TodoContext = React.createContext<IContextType|undefined>(undefined)