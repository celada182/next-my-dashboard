import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data: PokemonsResponse = await fetch(url).then((response) =>
    response.json()
  );

  const pokemons: SimplePokemon[] = data.results.map((result) => ({
    id: result.url.split("/").at(-2)!,
    name: result.name,
  }));

  //throw new Error('Test Error');
  //throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokemon List <small>Static</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons}></PokemonGrid>
      </div>
    </div>
  );
}
