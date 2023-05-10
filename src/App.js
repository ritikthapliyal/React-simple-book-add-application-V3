import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {

    const [books,setBooks] = useState([])

    const createBook = async (title)=>{
        const response = await axios.post('http://localhost:4000/books',{title})
        setBooks([...books,response.data])
    }

    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:4000/books')
        setBooks(response.data)
    }


    const deleteBookByID = async (id)=>{
      
      await axios.delete(`http://localhost:4000/books/${id}`)
      
      setBooks(books.filter(book=>{
        return book.id !== id
      }))
    
    }

    const editBookById = async (id,title)=>{

      const response = await axios.put(`http://localhost:4000/books/${id}`,{title})

      setBooks(books.map(book=>{
          
          if(book.id === id){
            return {...book,...response.data}    
          }

          return book
      }))
    }

    useEffect(()=>{
      fetchBooks()
    },[])

    return (
      <div className="App">
        <BookCreate onCreate={createBook}/>
        <BookList books={books} onDelete={deleteBookByID} onEdit={editBookById}/>
      </div>
    );
}

export default App;
