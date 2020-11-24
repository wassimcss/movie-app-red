import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ReactStars from 'react-stars'
import { deleteMovie } from '../Actions/Actions'
import AddMovie from './AddMovie'

 const MovieCard = (props) => {
    const b = true;
    

    return (
        <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.el.posterUrl} />
                <Card.Body>
                    <Card.Title>{props.el.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/movie/${props.el.id}`} ><Button variant="primary">Description</Button></Link>
                    <Button variant="danger" onClick={() =>props.deleteMovie(props.el.id)}>Delete</Button>
                    <ReactStars
                        count={5}
                        onChange={null}
                        edit={false}
                        size={24}
                        color2={'#ffd700'}
                        value = {props.el.rate/2} />
                </Card.Body>
            </Card>
            

            <AddMovie editMode ={b} movieToEdit={props.el} />

        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        deleteMovie : (id) => dispatch(deleteMovie(id))
    }
}

export default connect(null,mapDispatchToProps)(MovieCard)