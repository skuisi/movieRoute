import {useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
const AddMovie = ({addMovie}) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [NewMovie, setNewMovie] = useState([]);
    const handlechange=(e)=>{
        setNewMovie({...NewMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        ADD A NEW MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie name</Form.Label>
    <Form.Control onChange={handlechange} name="name" type="text" placeholder="Enter Movie name" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie description</Form.Label>
    <Form.Control onChange={handlechange} name="description" type="text" placeholder="Enter Movie description" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie poster</Form.Label>
    <Form.Control onChange={handlechange} name="posterurl" type="text" placeholder="Enter poster url" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie rate</Form.Label>
    <Form.Control onChange={handlechange} name="rating" type="number" placeholder="Enter Movie rarting" />

  </Form.Group>


 
  
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(NewMovie);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default AddMovie;
