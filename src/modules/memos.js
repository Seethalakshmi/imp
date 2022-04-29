//actions
export const LOGIN = 'memos/LOGIN'
export const LOGOUT = 'memos/LOGOUT'

// a reducer is a function that transitions the current state
//    to the next, given an action

// given a door. it is currently closed.
// If you apply the OPEN action
// the reducer will set the door's state to open.
// If you apply the CLOSE action
// the reducer will set the door's state to closed.
const initialState = {
    isLoggedIn: false
}

export default function reducer(state = initialState, action) {
    switch (action) {
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

        default:
            return state
    }
}