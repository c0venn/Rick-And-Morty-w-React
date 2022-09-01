import { useParams, Link } from "react-router-dom";
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
        <div className="container-fluid text-center mt-4" >
          <div className="d-flex justify-content-around align-items-center" >
            <Link to={"/characters/" + (character.id - 1)} >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSEtjZKAxYKSx+QyjFhAMYaKDKGG7h8JfZgaHxW47FhA0FUkBURaADP/D8n8+AwODA+N/xkRSLCFoAbLh//8zPFjqtlORaj6g1HCQQ3D6gBqG47SAWoZjtQDZcFLCeonrTqyhgSEIsuA38//9jIwMCjSxAGQosiWglMP6l9FxgeeOB6RYCFOLN5JhPqHEErz5gBo+ISqjUeITghagxwnViwpYZNG0sCMn9RBMRZQYiqyXqDigxLKhbwEAG6B2GaOw/3QAAAAASUVORK5CYII=" alt="arrow-back"/>
            </Link>
            <h1 style={{color: "#5cbb47"}}>{character.name}</h1>
            <Link to={"/characters/" + (character.id + 1)} >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMBJREFUSEvtlEEOgkAMRX8j3gNvogt1vAMm3ERuAgs9gygLr8I9xNTMgo0Rp3+QHbNu3mt/mxFM/GRiPmZBMGE6oqxxRdKhqg51G6QD3A48HNCTKtrlSzYWCTVBfnXpc6EPEaRWCSXwkbASWsBKogSMZFCQNXu1XElfM7STvwouu9vqs6lREXWJlgDWvvtvcC+LEvhLssCjBAycFrBwWnC8u1xFy1+Zj16y/4/O27qwnnDUkq1wOiIG3NfOEwRTewPC3X0ZDmRANAAAAABJRU5ErkJggg==" alt="arrow-next"/>
            </Link>
          </div>
          <Card 
            img={character.image}
            gender={character.gender}
            species={character.species}
            location={character.location.name}
            status={character.status}
            episodes={character.episode.length}
          />
        </div>
      )}
    </>
  );
};

export default Character;
