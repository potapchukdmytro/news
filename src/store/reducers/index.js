import { combineReducers } from "redux";
import NewsReducer from "./newsReducer";
import UserReducer from "./userReducer";

export const rootReducer = combineReducers({
    news: NewsReducer,
    user: UserReducer
});