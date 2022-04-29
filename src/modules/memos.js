//actions
export const LOGIN = 'memos/LOGIN'
export const LOGOUT = 'memos/LOGOUT'
export const ADD_MEMO = 'memos/ADD_MEMO'
export const DELETE_MEMO = 'memos/DELETE_MEMO'
export const EDIT_MEMO = 'memos/EDIT_MEMO'

// a reducer is a function that transitions the current state
//    to the next, given an action

// given a door. it is currently closed.
// If you apply the OPEN action
// the reducer will set the door's state to open.
// If you apply the CLOSE action
// the reducer will set the door's state to closed.
const initialState = {
    isLoggedIn: false,
    memos: []
}

export default function reducer(state = initialState, action) {
    switch (action?.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }

        case ADD_MEMO:
            return {
                ...state,
                memos: [...state.memos, action.memo]
            }

        case DELETE_MEMO:
            return {
                ...state,
                memos: state.memos.filter(memo => memo.id !== action.id)
            }

        case EDIT_MEMO:
            return {
                ...state,
                memos: state.memos.map(memo => memo.id === action.memo.id ? action.memo : memo)
            }

        default:
            return state
    }
}