import { combineReducers } from "redux";
import NewsReducer from "./newsReducer";
import UserReducer from "./userReducer";
import AuthReducer from "./authReducer";

export const rootReducer = combineReducers({
    news: NewsReducer,
    user: UserReducer,
    auth: AuthReducer
});