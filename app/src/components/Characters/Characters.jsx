import React, { useEffect, useState} from "react"
import Home from "../Home/Home"
import Paginator from "../Shared/Pagination"
import './Characters.css'

const Character = React.lazy(() => import('./Character'))

const Characters = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState("");
    const [activePage, setActivePage] = useState(1)
    
    async function getCharacter() {
        setIsLoading(true);
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
            setIsLoading(false);
        }  catch (error) {
            console.error(error);
        }
    }

    async function handlePage(pageNumber) {
        setIsLoading(true);
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?page='+pageNumber, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json();
            setList(data)
            setActivePage(pageNumber)
            setIsLoading(false)
        }  catch(error) {
            console.error(error)
            setIsLoading(false);
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
              <Paginator
                activePage={activePage} 
                onChange={handlePage}
                itemsCountPerPage={list.results.length}
                totalItemsCount={list.info.count}
                pageRangeDisplayed={10}
                hideDisabled
                />
                {isLoading ? <Home /> : 
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
                }
            </div>
            </>
          )}
        </>
    )
}

export default Characters