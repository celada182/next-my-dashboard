import { SimplePokemon } from "@/pokemons";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
  //   "1": { id: "1", name: "bulbasur" },
  //   "4": { id: "4", name: "charmander" },
  //   "7": { id: "7", name: "squirtle" },
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: not a viable solution, avoid triggering from reducers
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
  // TODO: investigate middleware
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

// Action creators are generated for each case reducer function
export const { setFavorites, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
