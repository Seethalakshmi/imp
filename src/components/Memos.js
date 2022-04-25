// Responsible for displaying a list of memos

import Memo from "./Memo";

// [
//     {title: 'Title1', description: 'Desc1', date: new Date(), complete: false},
//     {title: 'Title2', description: 'Desc2', date: new Date(), complete: true}
// ]
//
// .map()
//
// [
//     <Memo title={'Title1'} date={new Date()} description={'Desc1'} complete={false}/>,
//     <Memo title={'Title2'} date={new Date()} description={'Desc2'} complete={true}/>
// ]

export default function Memos({memos, _Memo=Memo}) {
    return <>
        {/*transform the memos array into a list of react components*/}
        {memos.map((memo, index) => <_Memo key={index} memo={memo}/>)}
    </>
}