import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate } from "react-router-dom";
import { ContactContext } from './ContactContext'
import { useContext } from 'react'

function Contact(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getContact, deleteContact } = useContext(ContactContext)
  let contact = getContact(params.contactId)
  if (contact ===  undefined) { return <p>Contact Not Found.</p> }

  let { id, name, email, phone } = contact

  function handleDeleteContact(id) {
    deleteContact(id)
    navigate('/contacts')
  }

  return (
    <Card className="align-self-start w-25">
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          <strong>Phone:</strong> <span>{phone}</span>
        </Card.Text>
        <Button variant="danger" onClick={handleDeleteContact.bind(this, id)}>Remove</Button>
      </Card.Body>
  </Card>
  )
}

export default Contact