// First parameter is an object containing all
//    properties that are passed into this
//    component
import {useState} from "react";
import {Button, Form} from "react-bootstrap";

function Login(properties) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function sendCredentials() {
        properties.onLogin({username, password})
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    return <Form>
        <Form.Group>
            <Form.Control type='text' placeholder='Username' onChange={onUsernameChange}></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Control type='text' placeholder='Password' onChange={onPasswordChange}></Form.Control>
        </Form.Group>

        {/*<button onClick={sendCredentials}>Login</button>*/}
        <Button variant={"primary"} onClick={sendCredentials}>Login</Button>
    </Form>
}

export default Login