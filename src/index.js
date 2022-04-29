import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {Container} from "react-bootstrap";
import {createStore} from "redux";
import memos from './modules/memos'
import {Provider} from "react-redux";

// store gluing together all parts of redux together
const store = createStore(memos)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Container>
                <App/>
            </Container>
        </Provider>
    </React.StrictMode>
);
