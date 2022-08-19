import { useEffect, useState } from "react"
import Character from "./Character"

const Characters = () => {

    const [list, setList] = useState("");
    
    async function getCharacter() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json();
            setList(data);
            console.log(data)
        }  catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCharacter()
    },[])

    return (
        <>
          {list.length === 0 ? (
            <div>
                <p>No hay personajes</p>
            </div>
          ) : (
            <>
            <div className="container mt-4">
                <div className="row mx-auto" >

              {Array.from(list.results).map((character, key) => {
                  return(
                      <Character 
                      itemNumber={key}
                      name={character.name}
                      src={character.image}
                      alt="..."
                      species={character.species}
                      />
                      )
                    })}
                </div>
            </div>
            </>
          )}
        </>
    )
}

export default Characters