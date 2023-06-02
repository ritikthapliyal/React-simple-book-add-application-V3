import React, { useState,useContext } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'

function BookShow({book}) {

    const {deleteBookByID} = useContext(BooksContext)
    
    const [showEdit,setShowEdit] = useState(false)

    const handleDelete = ()=>{
        deleteBookByID(book.id)
    }

    const handleEdit = (boolValue)=>{
        setShowEdit(boolValue)
    }

    return (
        <div className='bookshow'>
           { showEdit ? <BookEdit id={book.id} handleEdit={handleEdit}/> : <></>}
            {book.title}
        <div className='buttons'>
            <button onClick={()=>handleEdit(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    )
}

export default BookShow 