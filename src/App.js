import './App.css';
import { useEffect, useContext} from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BooksContext from './context/books';

function App() {

  const {fetchBooks} = useContext(BooksContext)

    useEffect(()=>{
      fetchBooks()
    },[])

    return (
      <div className="App">
        <BookCreate/>
        <BookList/>
      </div>
    );
}

export default App
