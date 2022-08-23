import './Episode.css'

const Episode = (props) => {
    return (
        <div className="episode-card m-4 col-12 col-md-6 col-xl-2" id={props.id} >
            <div className='episode'>
              <h1>{props.episode}</h1>
            </div>
            <p>{props.name}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Episode