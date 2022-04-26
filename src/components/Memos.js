// Responsible for displaying a list of memos

import Memo from "./Memo";
import {Row} from "react-bootstrap";

// [
//     'memo1',
//     'memo2'
// ]
//
// .map()
//
// [
//     <div>memo1</div>,
//     <div>memo2</div>
// ]

export default function Memos({memos, onDelete, _Memo=Memo}) {
    return <Row>
        {/*transform the memos array into a list of react components*/}
        {memos.map((memo, index) => <_Memo key={index} memo={memo} onDelete={onDelete}/>)}
    </Row>
}