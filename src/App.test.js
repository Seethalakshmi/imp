import { render, screen } from '@testing-library/react';
import {App} from './App';

// Up until now, we have done manual testing
// I called it "no excuses" testing
// Now we will use a framework
// framework is called jest
// We are no longer testing JS, we are testing
//    ecma script
// Ecma Script is a combination of JS and JSX

// Is this a unit test? no, it is a units test
test('should display _Memos when logged in', () => {
  let _memos = undefined
  let _onDelete = undefined
  const expectedText = 'This is the expected text'

  const mock = ({memos, onDelete}) => {
    _memos = memos
    _onDelete = onDelete
    return <>{expectedText}</>
  }

  const noText = 'NONONO'
  const nonono = () => <>{noText}</>

  const state = {
    isLoggedIn: true,
    memos: {}
  }

  function useSelector(selectorFn) {
    return selectorFn(state)
  }

  render(<App _Memos={mock} _Login={nonono} _useDispatch={() => {}} _useSelector={useSelector}/>)
  expect(screen.getByText(expectedText)).toBeInTheDocument()
  expect(typeof _memos).toBe('object')
  expect(screen.queryByText(noText)).not.toBeInTheDocument()
  expect(typeof _onDelete).toBe('function')
});

// This is a unit test
test('should display the login screen when logged out', () => {
  const expectedText = 'This is the expected text'
  const mockLogin = () => <>{expectedText}</>
  const noText = 'NONONO'
  const nonono = () => <>{noText}</>

  const state = {
    isLoggedIn: false
  }

  function useSelector(selectorFn) {
    return selectorFn(state)
  }

  render(<App _Login={mockLogin} _Memos={nonono} _useDispatch={() => {}} _useSelector={useSelector}/>)
  expect(screen.getByText(expectedText)).toBeInTheDocument()
  expect(screen.queryByText(noText)).not.toBeInTheDocument()
});

it('should pass an onEdit function as a property to Memos', () => {
  let _onEdit = undefined

  const Memos = ({onEdit}) => {
    _onEdit = onEdit
  }

  const state = {
    isLoggedIn: true
  }

  function useSelector(selectorFn) {
    return selectorFn(state)
  }

  render(<App loggedInInit={true} _Memos={Memos} _useDispatch={() => {}} _useSelector={useSelector}/>)
  expect(typeof _onEdit).toBe('function')
})