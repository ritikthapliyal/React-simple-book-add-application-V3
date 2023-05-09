import './App.css';
import { useState } from 'react';
import BookLists from './components/BookList';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

    const [books,setBooks] = useState([])

    const createBook = (title)=>{
        const id = Math.round(Math.random() * 9999)
        setBooks([...books,{id,title}])
    }

    const deleteBookByID = (id)=>{
        setBooks(books.filter(book=>{
          return book.id !== id
        }))
    }

    const editBookById = (id,newtitle)=>{
      setBooks(books.map(book=>{
          
          if(book.id === id){
            return {...book,title:newtitle}    
          }

          return book
      }))
    }

    return (
      <div className="App">
        <BookCreate onCreate={createBook}/>
        <BookList books={books} onDelete={deleteBookByID} onEdit={editBookById}/>
      </div>
    );
}

export default App;
