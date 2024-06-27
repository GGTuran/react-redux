import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/CounterSlice";
import logger from "./middlewares/logger";
import PostSlice from "./features/Posts/PostSlice";
import UsersSlice from "./features/users/UserSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        post: PostSlice,
        users: UsersSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch