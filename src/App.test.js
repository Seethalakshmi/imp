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
test('should display the main app when logged in', () => {
  render(<App loggedInInit={true}/>);
  const h1 = screen.getByText(/This is the main App/)
  expect(h1).toBeInTheDocument()
  const h2 = screen.getByText(/The count is 0/)
  expect(h2).toBeInTheDocument()
  const btn = screen.getByText(/Hello/)
  expect(btn).toBeInTheDocument()
});

// This is a unit test
test('should display the login screen when logged out', () => {
  const mockLogin = () => <>This is the expected text</>
  render(<App _Login={mockLogin}/>);
  const element = screen.getByText(/This is the expected text/);
  expect(element).toBeInTheDocument();
});
