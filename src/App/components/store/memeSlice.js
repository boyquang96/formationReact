import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState =  emptyMeme


const memeSlice = createSlice({
  name: "memeSlice",

  initialState,
  reducers: {
    changeMemeValue:(state, action) => {
        Object.assign(state,action.payload);
    },
    resetMemeValue:(state, action) => {
        Object.assign(state,action.payload)
    }

  }
});

export const {
    changeMemeValue,
    resetMemeValue
} = memeSlice.actions

export default memeSlice.reducer