import React, { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'

function BookList() {

    const {books} =  useContext(BooksContext)

    return (
        <div className='booklist'>{
            books.length > 0 
            ?   books.map((book)=>{
                    return <BookShow key={book.id} book={book}/>
            })
            :
            <h3>Please Add Some Books</h3>
        }</div>
    )
}


export default BookList