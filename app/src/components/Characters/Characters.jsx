import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Paginator from "../Shared/Pagination";
import "./Characters.css";

const Character = React.lazy(() => import("./Character"));

const Characters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("")

  async function getCharacter() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json();
      if (!response.ok) {
        return response
      }
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  async function handlePage(pageNumber) {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + pageNumber,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setList(data);
      setActivePage(pageNumber);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCharacter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, status, gender]);

  return (
    <>
      {list.length === 0 ? (
        <div>
          <p>No hay personajes</p>
        </div>
      ) : (
        <>
          <div className="container mt-4">
            <div className="d-flex justify-content-center my-4">
              <input
                className="rounded-pill"
                type="text"
                placeholder="Busca un personaje"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button
                type="button"
                className="search btn"
                data-bs-toggle="modal"
                data-bs-target="#filters"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQZJREFUSEvtlMsNgkAQQGci9oGdQCKCNchBK5FOwARqEIIJdiJ9+FkzyiYICzuIepIj2Xlvd34IX/7wy3z4vcDP3QIArDEvEwLKZJHNiNF6gZ+7YgxcxsZO9mB3CuSBoTJ5Qa3AuOAsWqblEMF675kXQ5woplOwOrghClhTHqdXtLmSCh5S/QRClMyzjTJFdPA8EQUimFzJC7xWYKWAfg6R9ME7BVyJDt4r0Ek4cK1AJZEDJAeyPlSqjmOtClX7Nfu9q51ZAgpuAv+CVkp/miI/9wIAsa3vnI8VmdqS1kgFPMZOZvctxMFdRLCnBHexkwa6bcsW0JaFG1hcsBSzBbqbjq7Bu4I7vHDaGT7e1F4AAAAASUVORK5CYII=" alt="filters-icon"/>
              </button>
              <div
                class="modal fade"
                id="filters"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-dark">
                    <div class="modal-header justify-content-center">
                      <h5 class="modal-title text-white" >
                        Filtros
                      </h5>
                    </div>
                    <div class="modal-body">
                      <div className="text-center border border-0">
                      <select
                        className="rounded-pill mx-2"
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        >
                        <option>Estado</option>
                        <option value="alive">Vivo</option>
                        <option value="dead">Muerto</option>
                        <option value="unknown">Desconocido</option>
                      </select>
                      <select className="rounded-pill mx-2" onChange={(e) => {setGender(e.target.value)}}>
                        <option>Género</option>
                        <option value="female">Mujer</option>
                        <option value="male">Hombre</option>
                        <option value="genderless">Sin género</option>
                        <option value="unknown">Desconocido</option>
                      </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        className="border border-0 bg-dark"
                        data-bs-dismiss="modal"
                      >
                        <img alt="Listo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANtJREFUSEvtlEEKwjAQRf/Qeo96k7iw1Du48CatJzGgnsGIC6/Se9gSGSEQQmMS2y6EZlVIeK/zZxLCzItm5mMRBBNeIvpEdLhVRZ9BnEsl3cxGR8TwLtcnAAKg42WrGlsySmDDtUZ7Le/rySqIgbPspwpi4V8F+0fV5B2k3KnWLjsF7hUwHNA157rqaWMkqXCvgEGvTD+JUBgJHzbT4mvo0LX29sCVEIGjEinwYJNtCR9OhQcF5pZyXPw9NOeh1y5qTLkSd5pCYLMfJYiFJTV5DHSytyjmJ/4/ojcOdXkZ5SAEIwAAAABJRU5ErkJggg=="  />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Paginator
              activePage={activePage}
              onChange={handlePage}
              itemsCountPerPage={list.results.length}
              totalItemsCount={list.info.count}
              pageRangeDisplayed={10}
              hideDisabled
            />
            {isLoading ? (
              <Home />
            ) : (
              <div className="row mx-auto">
                {Array.from(list.results).map((character, key) => {
                  return (
                    <Character
                      itemNumber={key}
                      name={character.name}
                      src={character.image}
                      link={"/characters/" + character.id}
                      alt="..."
                      species={character.species}
                      status={character.status}
                    />
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

export default Characters;
