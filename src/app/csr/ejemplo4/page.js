'use client'
import { useState, useEffect } from "react";


function Page() {
    const [characters, setcharacter] = useState([])

    useEffect(() => {
        // fetch('https://dummyjson.com/character')
        //     .then(res => res.json())
        //     .then(data => setcharacter(data.character));

        const fetchData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()

            setcharacter(data.results)
        }
        fetchData()

    }, [])


    return (
        <>      
             <h2 className="text-xl font-bold text-center">Ejemplo 4: CSR React</h2>
            <ul>
                {
                    characters.map(pokemon => (
                        <li key={pokemon.id} className="py-20 text-center">
                            <img src={pokemon.url.sprites.other.dreamWorld.front_default} alt="foto" className="mx-auto" />
                            <b>{pokemon.name}:</b>
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
