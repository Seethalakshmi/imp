import {render, screen} from "@testing-library/react";
import Memos from "./Memos";

// Will this be a unit test?
test('should show 2 memos', () => {
    // need 2 things to render
    // pass as an array
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const memoData = [
        {title: 'Title1', description: 'Desc1', date: new Date(), complete: false},
        {title: 'Title2', description: 'Desc2', date: yesterday, complete: true}
    ]

    function mockMemo({title, date, description, complete}) {
        return <>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date.toDateString()}</div>
            <div>{complete ? 'Complete' : 'To Do'}</div>
        </>
    }

    render(<Memos memos={memoData} _Memo={mockMemo}/>)
    expect(screen.getByText('Title1')).toBeInTheDocument()
    expect(screen.getByText('Title2')).toBeInTheDocument()
    expect(screen.getByText('Desc1')).toBeInTheDocument()
    expect(screen.getByText('Desc2')).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
    expect(screen.getByText('To Do')).toBeInTheDocument()
    expect(screen.getByText(memoData[0].date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(memoData[1].date.toDateString())).toBeInTheDocument()
})