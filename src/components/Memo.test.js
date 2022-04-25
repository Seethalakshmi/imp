import {render, screen} from "@testing-library/react";
import Memo from "./Memo";

test('should show title, date, description, and complete', () => {
    const title = 'Test Title'
    const date = new Date()
    const description = 'Test Description'
    const complete = true
    render(<Memo memo={{title, date, description, complete}}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
})

test('should show title, date, description, and not complete', () => {
    const title = 'Test Title'
    const date = new Date()
    const description = 'Test Description'
    const complete = false
    render(<Memo memo={{title, date, description, complete}}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('To Do')).toBeInTheDocument()
})