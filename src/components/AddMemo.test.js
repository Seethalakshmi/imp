import {render, screen} from "@testing-library/react";
import AddMemo from "./AddMemo";

test('should show input fields for each key in memo', () => {
    render(<AddMemo/>)
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Add')).toBeInTheDocument()
})