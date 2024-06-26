/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things." },
    { id: '2', title: 'Slices...', content: "The more i say slice, the more i want pizza." },
]

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content):any{
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
});

export const selectAllPost = (state:any) => state.posts;

export const { postAdded } = PostsSlice.actions;

export default PostsSlice.reducer;