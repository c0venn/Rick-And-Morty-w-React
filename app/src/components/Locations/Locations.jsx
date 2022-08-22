import { useEffect, useState } from "react";
import Location from "./Location";

const Locations = () => {

    const [locations, setLocations] = useState("");
    

    async function getLocations () {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/location", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = await response.json()
            setLocations(data.results);
            console.log(data)
        }  catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getLocations()
    },[])

    return (
        <>
          {locations === 0 ? (
            <div>
                <p> No hay locaciones</p>
            </div>
          ) : (
              <>
              {Object.values(locations).map((location, key) => {
                console.log(location)
                return (
                    <div className="d-flex justify-content-center mt-4" >
                      <Location 
                        item={key}
                        name={location.name}
                        dimension={location.dimension}
                        type={location.type}
                        />
                    </div>
                )
              })}

              </>
            )}
        </>
    )
}

export default Locations