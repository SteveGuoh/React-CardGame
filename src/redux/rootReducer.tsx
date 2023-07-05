import { combineReducers } from "@reduxjs/toolkit";
import card from "./card";

const rootReducer = combineReducers({
  card: card
});

export default rootReducer;
export type Rootstate = ReturnType<typeof rootReducer>;
