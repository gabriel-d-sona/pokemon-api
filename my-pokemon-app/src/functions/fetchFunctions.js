// Função para buscar dados de um Pokémon específico pelo nome ou ID
export const fetchPokemon = async (identifier) => {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    const urlJson = await url.json();
    return urlJson;
  };
  
  // Função para buscar uma lista de tipos de Pokémon
  export const fetchPokemonTypes = async () => {
    const url = await fetch('https://pokeapi.co/api/v2/type/');
    const urlJson = await url.json();
    return urlJson.results;
  };
  
  // Função para buscar uma lista de habilidades de Pokémon
  export const fetchPokemonAbilities = async () => {
    const url = await fetch('https://pokeapi.co/api/v2/ability/');
    const urlJson = await url.json();
    return urlJson.results;
  };
  
  // Função para buscar uma lista de itens de Pokémon
  export const fetchPokemonItems = async () => {
    const url = await fetch('https://pokeapi.co/api/v2/item/');
    const urlJson = await url.json();
    return urlJson.results;
  };
