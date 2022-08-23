import { useEffect, useState } from "react"
import Episode from "./Episode"

const Episodes = () => {

    const [episodes, SetEpisodes] = useState("")

    async function getEpisodes() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/episode", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json();
            SetEpisodes(data);
            console.log(data)
        }  catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getEpisodes()
    },[])

    return (
        <>
          {episodes.length === 0 ? (
            <div>
                No hay Episodios
            </div>
          ) : (
            <>
              <div className="container mt-4" >
              <div className="row mx-auto justify-content-center">
                {Array.from(episodes.results).map((episode, key) => {
                    return (
                        <Episode 
                        id={key}
                        episode={episode.episode}
                        name={episode.name}
                        date={episode.air_date}
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

export default Episodes