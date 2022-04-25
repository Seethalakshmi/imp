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
test('should display the counter component when logged in', () => {
  let _memos = undefined

  const mock = ({memos}) => {
    _memos = memos
    return <>This is the expected count</>
  }

  render(<App loggedInInit={true} _Memos={mock}/>);
  const h1 = screen.getByText(/This is the expected count/)
  expect(h1).toBeInTheDocument()
  expect(_memos).toBeDefined()
});

// This is a unit test
test('should display the login screen when logged out', () => {
  const mockLogin = () => <>This is the expected text</>
  render(<App _Login={mockLogin}/>);
  const element = screen.getByText(/This is the expected text/);
  expect(element).toBeInTheDocument();
});
