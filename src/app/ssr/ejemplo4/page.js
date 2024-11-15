import Image from 'next/image';

export const dynamic = 'force-dynamic';

async function fetchCharacter() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10'); // Ajusta el límite según sea necesario
  if (!res.ok) {
    throw new Error('Failed to fetch character');
  }
  const data = await res.json();
  return data.results.map((character, index) => {
    // Extraer ID del URL
    const id = character.url.split('/').filter(Boolean).pop();
    return { ...character, id };
  });
}

export default async function Page() {
  const characters = await fetchCharacter();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 4: SSR Next</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id} className="py-20 text-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${character.id}.svg`}
              alt={character.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <b>{character.name}:</b> {character.id}
          </li>
        ))}
      </ul>
    </>
  );
}
