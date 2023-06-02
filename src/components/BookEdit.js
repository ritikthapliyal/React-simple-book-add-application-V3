import React, { useState, useContext } from 'react'
import BooksContext from '../context/books'

function BookEdit({id,handleEdit}) {

    const [title,setTitle] = useState('')
    const {editBookById} = useContext(BooksContext)

    const handleClick = ()=>{
        editBookById(id,title)
        handleEdit(false)
    }

    return (
        <div className='bookedit'>
            <label>New Title</label>
            <input value={title}
            onChange={(e)=>setTitle(e.target.value)} ></input>
            <div className='buttons' style={{position:"unset"}}>
                <button onClick={handleClick}>Save</button>
                <button onClick={()=>handleEdit(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default BookEdit