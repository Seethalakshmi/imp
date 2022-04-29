import reducer, {LOGIN, LOGOUT} from "./memos";

it('should initialed with isLoggedIn false', () => {
    const state = reducer()
    expect(state?.isLoggedIn).toBe(false)
})

it('should set isLoggedIn to true when the LOGIN action is performed', () => {
    const state = reducer(undefined, LOGIN)
    expect(state?.isLoggedIn).toBe(true)
})

it('should set isLoggedIn to false when the LOGOUT action is performed', () => {
    const currentState = reducer()
    currentState.isLoggedIn = true
    const state = reducer(currentState, LOGOUT)
    expect(state?.isLoggedIn).toBe(false)
})