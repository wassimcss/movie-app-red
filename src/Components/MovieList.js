import React, { Component } from 'react'
import { connect } from 'react-redux'
import  MovieCard  from './MovieCard'

export class MovieList extends Component {

    render() {
        
        return (
            <div className="row">
                {
                    this.props.list.movies.filter(el => el.rate>this.props.list.rating && el.title.toLowerCase().includes(this.props.list.keyword.toLowerCase().trim())).map((el,index) => {
                        return(
                            <div  key = {index}>
                                <MovieCard  el={el}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    list : state.movieReducer,
})

export default connect(mapStateToProps)(MovieList)
