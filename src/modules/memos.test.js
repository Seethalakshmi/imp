import reducer, {ADD_MEMO, LOGIN, LOGOUT} from "./memos";

it('should initialed with isLoggedIn false', () => {
    const state = reducer()
    expect(state?.isLoggedIn).toBe(false)
})

it('should set isLoggedIn to true when the LOGIN action is performed', () => {
    const state = reducer(undefined, {type: LOGIN})
    expect(state?.isLoggedIn).toBe(true)
})

it('should set isLoggedIn to false when the LOGOUT action is performed', () => {
    const currentState = reducer()
    currentState.isLoggedIn = true
    const state = reducer(currentState, {type: LOGOUT})
    expect(state?.isLoggedIn).toBe(false)
})

it('should start with 0 memos', () => {
    const state = reducer(undefined)
    expect(state.memos?.length).toBe(0)
})

it('should add a memo when ADD_MEMO action is performed', () => {
    const existing = ['first']
    const memo = 'my memo'
    const currentState = reducer()
    currentState.memos = existing
    const state = reducer(currentState, {type: ADD_MEMO, memo})
    expect(state.memos).toStrictEqual([...existing, memo])
})