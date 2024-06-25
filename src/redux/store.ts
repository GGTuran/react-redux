import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/CounterSlice";
import logger from "./middlewares/logger";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch