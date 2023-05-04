import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//snip: rxslice

const initialState = {
    memes: [],
    images: []
}

const ressources = createSlice({
  name: "ressources",


  initialState,
  reducers: {
    addImages:(state, action) => {
        state.images.splice(0)
        state.images.push(...action.payload);
    },
    addMemes:(state, action) => {
        state.memes.push(...action.payload);
    }
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
    .addDefaultCase((state, action) => {
        console.log(action);
    })
  }


});

export const fetchImages = createAsyncThunk(
    'lists/fetchAllImages',
    // Declare the type your function argument here:
    async () => {
      const response = await fetch("http://localhost:5679/images")
      // Inferred return type: Promise<MyData>
      const values=await response.json();
      return values
});
export const fetchMemes = createAsyncThunk(
    'lists/fetchAllMemes',
    // Declare the type your function argument here:
    async () => {
      const response = await fetch("http://localhost:5679/memes")
      // Inferred return type: Promise<MyData>
      const values=await response.json();
      return values
});

export const {
    addImages, 
    addMemes
} = ressources.actions

export default ressources.reducer