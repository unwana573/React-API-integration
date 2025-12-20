import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {jsonPlaceholderApi} from "./services/JsonPlaceholderAPI.js";

export const store = configureStore({
    reducer: {
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch); 