import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit'
import ressourcesReducer from "./ressources";
import modalReducer from './modal';
import memeSlice from './memeSlice';

const store=configureStore({
    reducer:combineReducers({ressources: ressourcesReducer, modal: modalReducer, meme: memeSlice}),
    //devTools:false
})


export default store;