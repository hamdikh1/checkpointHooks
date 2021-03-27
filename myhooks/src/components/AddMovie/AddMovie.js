import React, {useState} from 'react'
import {Modal , Button ,Form} from 'react-bootstrap'
import RateMovie from '../RateMovie/RateMovie'

const AddMovie= (Addfilm) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [rate, setRate] = useState(0);

    const SubmitChange=()=>{
        let newmovie = {  
           name : name ,
           URL : image ,   
           rate : rate ,
           id : Math.random()
        }
        Addfilm(newmovie)
        setShow(false)
        setName('')
        setImage('')
        setRate('')
    }
  return (
      <div>
       <Button variant="primary" onClick={handleShow}>
       <img src ="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-5-512.png" style={{height: "90px" , width : "90px"}}/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Favorites Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type ="text" placeholder="Enter Your URL Movie "
                    value={name}
                    onChange={(e)=>setName(e.target.Value)}/>
                   
                </Form.Group>

                <Form.Group>
                    <Form.Label>URL Movie :</Form.Label>
                    <Form.Control type ="text" placeholder="Enter Your Movie Name"
                    value={image}
                    onChange={(e)=>setImage(e.target.Value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rate :</Form.Label>
                    <RateMovie rate={rate} setRate={setRate} />
                </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={SubmitChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}
export default AddMovie 