import {act, render, screen} from "@testing-library/react";
import EditMemo from "./EditMemo";
import userEvent from "@testing-library/user-event";
// const userEvent = require("@testing-library/user-event")

test('should show input fields with current memo data', () => {
    const memo = {
        title: 'Title1',
        date: new Date(),
        description: 'Desc1',
        complete: false
    }

    render(<EditMemo memo={memo}/>)

    const titleElement = screen.getByDisplayValue(memo.title)
    expect(titleElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.description)).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.date.toISOString().substr(0,10))).toBeInTheDocument()
    const completeElement = screen.getByRole('checkbox')
    expect(completeElement.checked).toBe(memo.complete)
})

test('should show input fields with current memo data and true complete', () => {
    const memo = {
        title: 'Title1',
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    render(<EditMemo memo={memo}/>)

    const titleElement = screen.getByDisplayValue(memo.title)
    expect(titleElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.description)).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.date.toISOString().substr(0,10))).toBeInTheDocument()
    const completeElement = screen.getByRole('checkbox')
    expect(completeElement.checked).toBe(memo.complete)
})

it('should show a cancel and apply button', () => {
    const memo = {
        title: 'Title1',
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    render(<EditMemo memo={memo}/>)
    expect(screen.getByText('Apply')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
})

// Establish goal first (user perspective, draw interface, etc..)
// What are the inputs and outputs to the function in order to achieve the goal
//      aka the public interface
// Think about how a human would test
// Translate to an automated form

// TDD: Test driven development
// TDD: Test driven design

it('should call the onCancel fn when the cancel button is clicked', () => {
    const memo = {
        title: 'Title1',
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const mock = jest.fn()
    render(<EditMemo memo={memo} onCancel={mock}/>)
    screen.getByText('Cancel').click()
    expect(mock).toHaveBeenCalled()
})

it('should call the onApply fn with the new values when the apply button is clicked', () => {
    const memo = {
        title: 'Title1',
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const mock = jest.fn()
    render(<EditMemo memo={memo} onApply={mock}/>)

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    yesterday.setUTCHours(0)
    yesterday.setMinutes(0)
    yesterday.setSeconds(0)
    yesterday.setMilliseconds(0)

    const expected = {
        title: 'new title',
        date: yesterday,
        description: 'new desc',
        complete: false
    }

    const titleInput = screen.getByDisplayValue(memo.title)
    const descInput = screen.getByDisplayValue(memo.description)
    const dateInput = screen.getByDisplayValue(memo.date.toISOString().substr(0,10))

    act(() => {
        userEvent.clear(titleInput)
        userEvent.type(titleInput, expected.title)
        userEvent.clear(descInput)
        userEvent.type(descInput, expected.description)
        userEvent.clear(dateInput)
        userEvent.type(dateInput, expected.date.toISOString().substr(0,10))
        screen.getByRole('checkbox').click()
    })

    screen.getByText('Apply').click()
    expect(mock).toHaveBeenCalledWith(expected)
})