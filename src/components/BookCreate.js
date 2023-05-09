import React,{useState} from 'react'

function BookCreate({onCreate}) {

    const [title,setTitle] = useState('')

    const handleCreate = ()=>{
        onCreate(title)
        setTitle('')
    }


    return (
        <div className='bookcreate'>
            <h2>Add a Book</h2>
            <label>Title</label>
            <input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}></input>
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default BookCreate