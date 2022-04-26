// Responsible for displaying a list of memos

import Memo from "./Memo";

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

export default function Memos({memos, onDelete, _Memo = Memo}) {
    return <>
        {/*transform the memos array into a list of react components*/}
        {memos.map(
            (memo, index) => <div key={index} className={'m-3'}>
                <_Memo memo={memo} onDelete={onDelete}/>
            </div>)
        }
    </>
}