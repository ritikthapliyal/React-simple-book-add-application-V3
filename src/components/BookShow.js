import React, { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({book,onDelete,onEdit}) {

    const [showEdit,setShowEdit] = useState(false)

    const handleDelete = ()=>{
        onDelete(book.id)
    }

    const handleEdit = (boolValue)=>{
        setShowEdit(boolValue)
    }

    return (
        <div className='bookshow'>
            
           { showEdit ? <BookEdit id={book.id} onEdit={onEdit} handleEdit={handleEdit}/> : <></>}

            {book.title}
            <div className='buttons'>
                <button onClick={()=>handleEdit(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow 