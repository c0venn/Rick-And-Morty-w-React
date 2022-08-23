import { useEffect, useState } from "react";
import Paginator from "../Shared/Pagination";
import Episode from "./Episode";

const Episodes = () => {
  const [episodes, SetEpisodes] = useState("");
  const [activePage, setActivePage] = useState(1)


  async function getEpisodes() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      SetEpisodes(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function handlePage(pageNumber) {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode/?page='+pageNumber, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        });
        const data = await response.json();
        SetEpisodes(data)
        setActivePage(pageNumber)
    }  catch(error) {
        console.error(error)
    }
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      {episodes.length === 0 ? (
        <div>No hay Episodios</div>
      ) : (
        <>
          <div className="container mt-4">
            <Paginator 
              activePage={activePage} 
              onChange={handlePage}
              itemsCountPerPage={episodes.results.length}
              totalItemsCount={episodes.info.count}
              pageRangeDisplayed={3}
              hideDisabled
            />
            <div className="row mx-auto justify-content-center">
              {Array.from(episodes.results).map((episode, key) => {
                return (
                  <Episode
                    id={key}
                    episode={episode.episode}
                    name={episode.name}
                    date={episode.air_date}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Episodes;
