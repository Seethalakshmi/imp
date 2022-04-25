import {render, screen} from "@testing-library/react";
import Counter from "./Counter";

// 1. write a test
// 2. make the test compile
// 3. see that the test fails
// 4. make the test pass
test('should start at 0', () => {
    render(<Counter number={0}/>)
    expect(screen.getByText(/0/)).toBeInTheDocument()
})

test('should start at 1', () => {
    render(<Counter number={1}/>)
    expect(screen.getByText(/1/)).toBeInTheDocument()
})

test('should increment on click', () => {
    const mock = jest.fn()
    render(<Counter number={0} onIncrement={mock}/>)
    screen.getByRole('button').click()
    expect(mock).toHaveBeenCalled()
})