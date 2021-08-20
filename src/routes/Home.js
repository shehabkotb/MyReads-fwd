import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import '../App.css'
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../constants'
import BookShelf from '../components/BookShelf'
import * as BooksAPI from '../BooksAPI'

const Home = (props) => {
  const history = useHistory()

  const { books, changeBookShelf, setBooks } = props

  useEffect(() => {
    BooksAPI.getAll().then((response) => setBooks(response))
  })

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={'Currently Reading'}
            books={books.filter((book) => book.shelf === CURRENTLY_READING)}
            changeBookShelf={changeBookShelf}
          />
          <BookShelf
            title={'Want To Read'}
            books={books.filter((book) => book.shelf === WANT_TO_READ)}
            changeBookShelf={changeBookShelf}
          />
          <BookShelf
            title={'Read'}
            books={books.filter((book) => book.shelf === READ)}
            changeBookShelf={changeBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => history.push('/search')}></button>
      </div>
    </div>
  )
}

export default Home
