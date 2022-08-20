import './Home.css'

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center my-5 p-5 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="rickk" className="titulo" />
            </div>
            <footer>
                <div className='d-flex justify-content-center' >
                    <p>
                        <a href='https://rickandmortyapi.com/'>
                          Potenciado gracias a The Rick and Morty API!
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Home