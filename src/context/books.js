import { createContext,useState } from "react"
import axios from 'axios';

const BooksContext = createContext()

function Provider({ children }){
    
    const [books,setBooks] = useState([])
    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:4000/books')
        setBooks(response.data)
    }

    const createBook = async (title)=>{
        const response = await axios.post('http://localhost:4000/books',{title})
        setBooks([...books,response.data])
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

    return <BooksContext.Provider value={{}}>
        {children}
    </BooksContext.Provider>

}


export {Provider}
export default BooksContext