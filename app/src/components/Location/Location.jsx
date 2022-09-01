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
          .then((response) => response.json())
          .then((data) => info.push(data));
      });
      console.log(info);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idLocation]);

  return (
    <>
      {location.length === 0 ? (
        <div>
          <p>no se encuentra la locación</p>
        </div>
      ) : (
        <div className="container text-center mt-4">
          <div className="d-flex justify-content-around align-items-center">
            <Link to={"/locations/" + (location.id - 1)} style={{ color: "#5cbb47", fontWeight: 700 }}>back</Link>
            <h1 style={{ color: "#fbf976", fontWeight: 700 }}>
              {location.name}
            </h1>
            <Link to={"/locations/" + (location.id + 1)} style={{ color: "#5cbb47", fontWeight: 700 }}>next</Link>
          </div>
          <div className="row mx-auto mt-4">
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
