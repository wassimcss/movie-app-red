import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactStars from 'react-stars'
import { getKeyword, getRating } from '../Actions/Actions'

export class Filter extends Component {
    state = {
        stars:1,
        text : ""
    }

    ratingChanged = (newRating) => {
        this.setState({stars:newRating},()=>this.props.getRating(2*this.state.stars))
        
    }

    handleChange = (e) =>{
        this.setState({text:e.target.value},()=>this.props.getKeyword(this.state.text))
        
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form className="form">
                    <input type="text" value={this.state.text} onChange = {this.handleChange} />

                    <ReactStars
                        count={5}
                        onChange={this.ratingChanged}
                        value = {this.state.stars}
                        size={24}
                        color2={'#ffd700'} />

                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        getKeyword : (word) => dispatch(getKeyword(word)),
        getRating : (rating) => dispatch(getRating(rating))
    }
}


export default connect(null,mapDispatchToProps) (Filter)
