import {useDispatch} from "react-redux";
import {ADD_MEMO} from "../modules/memos";
import {useState} from "react";

export default function AddMemo({_useDispatch = useDispatch}) {
    const dispatch = _useDispatch()
    const [memo, setMemo] = useState({
        title: '',
        description: '',
        date: new Date(),
        complete: false
    })

    function handleAdd() {
        dispatch({type: ADD_MEMO, memo})
    }

    return <>
        <input placeholder='Title' onChange={e => setMemo({...memo, title: e.target.value})}/>
        <input placeholder='Description' onChange={e => setMemo({...memo, description: e.target.value})}/>
        <input type='date' placeholder='Date' onChange={e => setMemo({...memo, date: new Date(e.target.value)})}/>
        <input type='checkbox' onChange={e => setMemo({...memo, complete: e.target.checked})}/>
        <button>Cancel</button>
        <button onClick={handleAdd}>Add</button>
    </>
}