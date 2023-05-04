import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import memeReducer from "./meme.slice";
import listsReducer from './list.slice'
createAsyncThunk()


export default configureStore({
  reducer: combineReducers({ meme: memeReducer, modal: modalReducer , lists:listsReducer}),
});
/*
export default createStore(
  combineReducers({ modal: modalReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/
