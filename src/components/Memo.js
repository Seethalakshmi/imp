// Display a single memo

import {Card} from "react-bootstrap";

export default function Memo({memo, onDelete}) {
    const {id, title, date, description, complete} = memo
    return <Card>
        <Card.Header>
            <h3>{title}</h3>
        </Card.Header>
        <Card.Body>
            <h5>{date.toDateString()}</h5>
            <h5>{description}</h5>
            <h5>{complete ? 'Complete' : 'To Do'}</h5>
            <button onClick={() => onDelete(id)}>Delete</button>
        </Card.Body>
    </Card>
}