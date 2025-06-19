import { PokemonGrid } from "@/pokemons";

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon Favorites <small>Global State</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={[]}></PokemonGrid>
      </div>
    </div>
  );
}
