import { useEffect, useState } from "react";
import Location from "./Location";
import Paginator from "../Shared/Pagination";
import "./Locations.css";
import Home from "../Home/Home";

const Locations = () => {
  const [locations, setLocations] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function getLocations() {
    setIsLoading(true);
    try {
      const response = await fetch("https://rickandmortyapi.com/api/location", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLocations(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handlePage(pageNumber) {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/location/?page=" + pageNumber,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setLocations(data);
      setActivePage(pageNumber);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      {locations.length === 0 ? (
        <div>
          <p> No hay locaciones</p>
        </div>
      ) : (
        <>
          <div className="container mt-4">
            <Paginator
              activePage={activePage}
              onChange={handlePage}
              itemsCountPerPage={locations.length}
              totalItemsCount={locations.info.count}
              pageRangeDisplayed={5}
              hideDisabled
            />
            {isLoading ? (
              <Home />
            ) : (
              <div>
                {Object.values(locations.results).map((location, key) => {
                  return (
                    <div className="locations d-flex justify-content-center my-4">
                      <Location
                        key={location.id}
                        item={key}
                        name={location.name}
                        dimension={location.dimension}
                        type={location.type}
                        link={"/locations/" + location.id}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Locations;
