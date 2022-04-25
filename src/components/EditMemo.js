// Responsible for editing a memo

export default function EditMemo({memo}) {
    const {title, description, date, complete} = memo

    return <>
        <input defaultValue={title}/>
        <input defaultValue={description}/>
        <input type='date' defaultValue={date.toISOString().substr(0,10)}/>
        <input type='checkbox' defaultChecked={complete}/>
    </>
}