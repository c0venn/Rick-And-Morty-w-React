import { useEffect, useState } from "react";
import Location from "./Location";
import Paginator from "../Shared/Pagination"
import './Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState("");
    const [activePage, setActivePage] = useState(1)
    

    async function getLocations () {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/location", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json()
            setLocations(data);
        }  catch (error) {
            console.error(error)
        }
    }

    async function handlePage(pageNumber) {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location/?page='+pageNumber, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json();
            setLocations(data)
            setActivePage(pageNumber)
            console.log(data)
        }  catch(error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getLocations()
    },[])

    return (
        <>
          {locations.length === 0 ? (
            <div>
                <p> No hay locaciones</p>
            </div>
          ) : (
              <>
              <div className="container mt-4" >
              <Paginator 
                activePage={activePage} 
                onChange={handlePage}
                itemsCountPerPage={locations.length}
                totalItemsCount={locations.info.count}
                pageRangeDisplayed={5}
                hideDisabled
                />
              {Object.values(locations.results).map((location, key) => {
                  return (
                      <div className="locations d-flex justify-content-center my-4" >
                      <Location 
                        item={key}
                        name={location.name}
                        dimension={location.dimension}
                        type={location.type}
                        />
                    </div>
                )
            })}

            </div>
              </>
            )}
        </>
    )
}

export default Locations