import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const Character = () => {
  const { idCharacter } = useParams();
  const [character, SetCharacter] = useState("");

  useEffect(() => {
    async function getCharacter() {
        try {
          const response = await fetch(
            "https://rickandmortyapi.com/api/character/" + idCharacter,
            {
              method: "GET",
              headers: {
                "Content-Type": "aplication/json",
              },
            }
          );
          const data = await response.json();
          SetCharacter(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    getCharacter();
  }, [idCharacter]);

  return (
    <>
      {character.length === 0 ? (
        <div>
          <p>no se encuentra el personaje</p>
        </div>
      ) : (
        <div className="container-fluid mt-4" >
          <Card 
            img={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
            location={character.location.name}
            status={character.status}
          />
        </div>
      )}
    </>
  );
};

export default Character;
