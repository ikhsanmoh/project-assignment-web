import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux";

export type PokemonDetail = any;

export interface PokemonModalState {
  visible: boolean;
  item: PokemonDetail | null;
}

const initialState: PokemonModalState = {
  visible: false,
  item: null,
};

export const pokemonModalSlice = createSlice({
  name: "pokemonModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.visible = !state.visible;
    },
    closeModal: (state) => {
      state.visible = false;
      state.item = null;
    },
    openModal: (state, action: PayloadAction<PokemonDetail>) => {
      state.visible = true;
      state.item = { ...state.item, ...action };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal, openModal, closeModal } = pokemonModalSlice.actions;

export const selectPokemonModalValue = (state: RootState) =>
  state.pokemonModal.visible;

export default pokemonModalSlice.reducer;
