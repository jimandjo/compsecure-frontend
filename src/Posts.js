import { Card } from "react-bootstrap"
import posts from "./PostData"
import ContactName from "./contactName"

function Posts() {
    let info = posts[1]
    for (let i=0; i< 10; i++)
    return (
<>
    <ContactName />
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{info.title.toUpperCase()}</Card.Title>
        <Card.Subtitle>{info.date}</Card.Subtitle>
        <Card.Text>{info.body}</Card.Text>
      </Card.Body>
    </Card>
</>
    
    )
}
export default Posts