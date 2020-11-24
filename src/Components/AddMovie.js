import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addMovie, editMovie } from '../Actions/Actions';
import { v4 as uuidv4 } from 'uuid'


function AddMovie(props) {
  const [show, setShow] = useState(false);
  //const [title,setTitle] = useState ("");
  //const [rate,setRate] = useState ("");
  //const [src,setSrc] = useState ("");
  const [item, setItem] = useState({
    title: "",
    rate: "",
    posterUrl: ""
  });



  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (props.editMode) {
      setShow(true);
      setItem({
        ...item,
        title: props.movieToEdit.title,
        rate: props.movieToEdit.rate,
        posterUrl: props.movieToEdit.posterUrl
      })
    }
    else
      setShow(true);
  }
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const edit = () => {
   props.editMovie(props.movieToEdit.id,item)
   setShow(false)
   setItem({})
  }


  const add = () => {
    let todo = {
      id: uuidv4(),
      title: item.title,
      rate: item.rate,
      posterUrl: item.posterUrl
    }
    props.addMovie(todo)
    setShow(false)
    setItem({})
  }



  return (

    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.editMode === true ? "Edit Movie" : "Add Movie"}
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} >
          <Modal.Header closeButton>
            <Modal.Title>{props.editMode === true ? "Edited Movie" : "New Movie"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-group" >
              <label htmlFor="title">Title:</label>
              <input value={item.title} type="text" name="title" className="form-control" onChange={handleChange} />
              <label htmlFor="title">rating:</label>
              <input value={item.rate} className="form-control" type="text" name="rate" onChange={handleChange} /><br />
              <label htmlFor="title">Image url:</label>
              <input value={item.posterUrl} className="form-control" type="text" name="posterUrl" onChange={handleChange} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={props.editMode ? edit : add}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (item) => dispatch(addMovie(item)),
    editMovie: (id, value) => dispatch(editMovie(id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)


