import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Phrase } from "../../rulesPhrases/Iphrases";
import { phrases } from "../../frases_e_imagenes/listaFrases";

const initialState: Array<Phrase> = phrases;

export const phraseSlice = createSlice({
    name: "phrase",
    initialState,
    reducers: {
        giveLike: (state, action: PayloadAction<number>) => {
            state[action.payload].likes += 1
        },
        giveLikeFilter: (state, action: PayloadAction<Phrase>) => {
            state.filter((ph) => ph.author == action.payload.author)[0].likes += 1
        }
    }
})

export const {giveLike, giveLikeFilter} = phraseSlice.actions;