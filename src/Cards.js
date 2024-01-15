import { Card, CardGroup } from "react-bootstrap";
function GroupCard() {
return (
    <div class="container">
<CardGroup>
    <Card>
        <Card.Img variant="top" src="./images/deco4.jpg" />
        <Card.Body>
        <Card.Title>Hermes</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="./images/deco5.jpg"/>
        <Card.Body>
        <Card.Title>Contrast</Card.Title>
        <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src="./images/deco6.jpg" />
        <Card.Body>
        <Card.Title>Dream</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    </CardGroup>
    </div>
);
}

export default GroupCard;