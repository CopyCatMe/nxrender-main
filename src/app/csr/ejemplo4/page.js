'use client';
import { useState, useEffect } from 'react';

function Page() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151'); // Puedes ajustar el límite si es necesario
            const data = await res.json();

            // Mapear para incluir el `id` extraído de la URL
            const mappedCharacters = data.results.map((pokemon) => {
                const id = pokemon.url.split('/').filter(Boolean).pop(); // Extrae el ID de la URL
                return { ...pokemon, id };
            });

            setCharacters(mappedCharacters);
        };

        fetchData();
    }, []);

    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 4: CSR React</h2>
            <ul>
                {characters.map((pokemon) => (
                    <li key={pokemon.id} className="py-20 text-center">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt={pokemon.name}
                            className="mx-auto"
                            width={200}
                            height={200}
                        />
                        <b>{pokemon.name}</b>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Page;
