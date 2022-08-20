import React, { useEffect, useState, Suspense } from "react"
import Pagination from "react-js-pagination"
import './Characters.css'

const Character = React.lazy(() => import('./Character'))

const Characters = () => {

    const [list, setList] = useState("");
    const [activePage, setActivePage] = useState(1)
    
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

    async function handlePage(pageNumber) {
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
        }  catch(error) {
            console.error(error)
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
            <div className="d-flex justify-content-center mx-2 pagination" >
              <Suspense fallback={<div>Loading...</div>}>
              <Pagination 
                activePage={activePage} 
                onChange={handlePage}
                itemsCountPerPage={list.results.length}
                totalItemsCount={list.info.count}
                pageRangeDisplayed={10}
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                />
              </Suspense>
            </div>
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