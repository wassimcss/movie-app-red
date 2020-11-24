import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export const Description = (props) => {
    let id =props.match.params.id;
    let movie = props.movies.find(el =>el.id === id)
    console.log(movie)
    console.log(id)
    return (
       
        <div>
            {
                movie ? <h1>Description:{movie.description}</h1> :null
                
            }
            <Link to="/"><button className="btn btn-warning">Go Home</button></Link>
        </div>
    )
}
const mapStateToProps = (state) => ({
    movies : state.movieReducer.movies
})

export default connect(mapStateToProps)(Description)

