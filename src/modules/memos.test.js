import reducer, {ADD_MEMO, DELETE_MEMO, EDIT_MEMO, LOGIN, LOGOUT} from "./memos";

it('should initialed with isLoggedIn false', () => {
    const state = reducer()
    expect(state?.isLoggedIn).toBe(false)
})

it('should set isLoggedIn to false when the LOGIN action is performed and username is wrong', () => {
    const state = reducer(undefined, {
        type: LOGIN, credentials: {
            username: 'andre',
            password: 'mypass'
        }
    })
    expect(state?.isLoggedIn).toBe(false)
})

it('should set isLoggedIn to false when the LOGIN action is performed and password is wrong', () => {
    const state = reducer(undefined, {
        type: LOGIN, credentials: {
            username: 'madison',
            password: 'pass'
        }
    })
    expect(state?.isLoggedIn).toBe(false)
})

it('should set isLoggedIn to true when the LOGIN action is performed and credentials are correct', () => {
    const state = reducer(undefined, {
        type: LOGIN, credentials: {
            username: 'madison',
            password: 'mypass'
        }
    })
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

it('should remove a memo when DELETE_MEMO is performed', () => {
    const currentState = reducer()
    currentState.memos = [
        {id: 0, title: 'memo1'},
        {id: 1, title: 'memo2'},
        {id: 2, title: 'memo3'}
    ]
    const state = reducer(currentState, {type: DELETE_MEMO, id: 1})
    expect(state.memos).toStrictEqual([
        {id: 0, title: 'memo1'},
        {id: 2, title: 'memo3'}
    ])
})

it('should update all fields of a memo when EDIT_MEMO is performed', () => {
    const currentState = reducer()
    currentState.memos = [
        {id: 0, title: 'memo1'},
        {id: 1, title: 'memo2'},
        {id: 2, title: 'memo3'}
    ]
    const newMemo = {id: 1, title: 'new'}
    const state = reducer(currentState, {type: EDIT_MEMO, memo: newMemo})
    expect(state.memos).toStrictEqual([
        {id: 0, title: 'memo1'},
        {id: 1, title: 'new'},
        {id: 2, title: 'memo3'}
    ])
})