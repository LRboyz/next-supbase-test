import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import globalReducer from "./reducer/global";
// import userReducer from "./reducer/user";
import memoReducer from "./reducer/memo";
import articleReducer from "./reducer/article";
import shortcutReducer from "./reducer/shortcut";
import filterReducer from "./reducer/filter";
import resourceReducer from "./reducer/resource";
import dialogReducer from "./reducer/dialog";
import tagReducer from "./reducer/tag";
import layoutReducer from "./reducer/layout";

const store = configureStore({
  reducer: {
    global: globalReducer,
    // user: userReducer,
    memo: memoReducer,
    article: articleReducer,
    // tag: tagReducer,
    // shortcut: shortcutReducer,
    // filter: filterReducer,
    // resource: resourceReducer,
    // dialog: dialogReducer,
    // layout: layoutReducer,
  },
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
