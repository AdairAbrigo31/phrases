import { configureStore } from "@reduxjs/toolkit";
import { phraseSlice } from "./slices/PhraseSlice";

export const store = configureStore({
    reducer: {
        phraseStore : phraseSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch