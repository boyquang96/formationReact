import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { REST_ADR, RES_RESSOURCES } from '../config/config';

const initialState = {
    memes:[],
    images:[],
}

const list = createSlice({
  name: 'lists',
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase('lists/fetchAllImages/fulfilled',(state,action)=>{
        state.images.splice(0);
        state.images.push(...action.payload);
    })
    .addCase('lists/fetchAllMemes/fulfilled',(state,action)=>{
        state.memes.splice(0);
        state.memes.push(...action.payload);
    })
  }
});
export const fetchImages = createAsyncThunk(
    'lists/fetchAllImages',
    // Declare the type your function argument here:
    async () => {
      const response = await fetch(`${REST_ADR}${RES_RESSOURCES.images}`)
      // Inferred return type: Promise<MyData>
      const values=await response.json();
      return values
});
export const fetchMemes = createAsyncThunk(
    'lists/fetchAllMemes',
    // Declare the type your function argument here:
    async () => {
      const response = await fetch(`${REST_ADR}${RES_RESSOURCES.memes}`)
      // Inferred return type: Promise<MyData>
      const values=await response.json();
      return values
});
//export const {} = list.actions

export default list.reducer