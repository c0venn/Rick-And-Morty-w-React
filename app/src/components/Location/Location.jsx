import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Resident from "./Resident";

const Location = () => {
  const { idLocation } = useParams();
  const [location, SetLocation] = useState("");
  const [residents, SetResidents] = useState([]);
  const [resident, SetResident] = useState([]);
  let info = [];

  async function fetchResident() {
    try {
      residents.forEach((index) => {
        fetch(index)
        .then(response => response.json())
        .then(data => info.push(data))
      });
      console.log(info)
      SetResident(info);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function getLocation() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location/" + idLocation,
          {
            method: "GET",
            headers: {
              "Content-Type": "aplication/json",
            },
          }
        );
        const data = await response.json();
        SetLocation(data);
        console.log(location);
        SetResidents(data.residents);
      } catch (error) {
        console.log(error);
      }
    }
    getLocation();
    fetchResident();
  }, [idLocation]);

  return (
    <>
      {location.length === 0 ? (
        <div>
          <p>no se encuentra la locación</p>
        </div>
      ) : (
        <div className="text-center mt-4">
          <h1 className="text-white">{location.name}</h1>
          <Link to={"/location/" + (location.id - 1)}>back</Link>
          <Link to={"/location/" + (location.id + 1)}>next</Link>
          <div>
            {Array.from(resident).map((resident) => {
              return (
                <Resident
                  key={resident.id}
                  image={resident.image}
                  alt="personaje"
                  name={resident.name}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Location;
