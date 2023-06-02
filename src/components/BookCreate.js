import React,{useContext, useState} from 'react'
import BooksContext from '../context/books'

function BookCreate({onCreate}) {

    const [title,setTitle] = useState('')

    const { createBook } = useContext(BooksContext)

    const handleCreate = ()=>{
        createBook(title)
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