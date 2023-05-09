import React from 'react'
import BookShow from './BookShow'

function BookList({books,onDelete,onEdit}) {
    return (
        <div className='booklist'>{
            books.length > 0 
            ?   books.map((book)=>{
                    return <BookShow onEdit={onEdit} key={book.id} onDelete={onDelete} book={book}/>
            })
            :
            <h3>Please Add Some Books</h3>
        }</div>
    )
}


export default BookList