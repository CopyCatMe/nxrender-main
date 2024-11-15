import Image from 'next/image';

export const dynamic = 'force-dynamic'


async function fetchCharacter() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) {
    throw new Error('Failed to fetch character');
  }
  const data = await res.json();
  return data.results;
}


export default async function Page() {
  const characters = await fetchCharacter();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 4: SSR Next</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id} className="py-20 text-center">
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <b>{character.name}:</b> {character.created}
          </li>
        ))}
      </ul>
    </>
  );
}
