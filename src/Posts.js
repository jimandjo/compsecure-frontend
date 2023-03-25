import { Card } from "react-bootstrap"
import posts from "./PostData"

function Posts() {
    let info = posts[0]
    return (
<>
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