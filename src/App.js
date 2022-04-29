import './App.css';
import Login from "./components/Login";
import Memos from "./components/Memos";
import EditMemo from "./components/EditMemo";
import {useDispatch, useSelector} from "react-redux";
import {APPLY_EDIT_MEMO, CANCEL_MEMO, DELETE_MEMO, EDIT_MEMO, LOGIN, LOGOUT} from "./modules/memos";

// dux pattern

// All 'Functional React Components' are render functions
// This function is called every time we want to render our
//    application
// Each FRC must return a single tag/element

// App handles the state, and state modification

// 1. Allow a user to create, edit, and delete memos
// 2. Each memo shall have:
//    a. title
//    b. date that it was created
//    c. description (the actual memo)
//    d. complete/not-complete
// 3. Authenticate the user
export function App({loggedInInit = false, _Login = Login, _Memos = Memos}) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const memos = useSelector(state => state.memos)
    const memoToEdit = useSelector(state => state.memoToEdit)

    function deleteMemo(memoID) {
        dispatch({type: DELETE_MEMO, id: memoID})
    }

    function handleLogin(credentials) {
        dispatch({type: LOGIN, credentials})
    }

    function handleLogout() {
        dispatch({type: LOGOUT})
    }

    function editMemo(memo) {
        dispatch({type: EDIT_MEMO, memo})
    }

    function cancelEditMemo() {
        dispatch({type: CANCEL_MEMO})
    }

    function applyEditMemo(memo) {
        dispatch({type: APPLY_EDIT_MEMO})
    }

    if (isLoggedIn)
        if (memoToEdit)
            return <div>
                <EditMemo memo={memoToEdit} onCancel={cancelEditMemo}
                          onApply={applyEditMemo}/>
            </div>
        else
            return <div>
                <_Memos memos={memos} onDelete={deleteMemo} onEdit={editMemo}/>
            </div>
    else
        return <div className={'d-flex justify-content-center'}>
            <_Login onLogin={handleLogin}/>
        </div>
}

export default App;
