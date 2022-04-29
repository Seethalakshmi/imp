import {render, screen} from "@testing-library/react";
import AddMemo from "./AddMemo";
import userEvent from "@testing-library/user-event";
import {ADD_MEMO} from "../modules/memos";

test('should show input fields for each key in memo', () => {
    render(<AddMemo/>)
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Add')).toBeInTheDocument()
})

it('should dispatch an ADD_MEMO action w/ a memo payload when the Add button is clicked', () => {
    const mock = jest.fn()
    const useDispatch = () => mock

    render(<AddMemo _useDispatch={useDispatch}/>)

    const memo = {
        title: 'title',
        description: 'desc',
        date: new Date(),
        complete: true
    }

    memo.date.setTime(0)

    userEvent.type(screen.getByPlaceholderText('Title'), memo.title)
    userEvent.type(screen.getByPlaceholderText('Description'), memo.description)
    userEvent.type(screen.getByPlaceholderText('Date'), memo.date.toISOString().substring(0,10))
    userEvent.click(screen.getByRole('checkbox'))
    userEvent.click(screen.getByText('Add'))

    expect(mock).toHaveBeenCalledWith({type: ADD_MEMO, memo})
})