import React, { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Search from './routes/Search'
import Home from './routes/Home'
import * as BooksAPI from './BooksAPI'
import { NONE } from './constants'

const BooksApp = () => {
  const [books, setBooks] = useState([])

  const updateBookShelf = (book, newShelf) => {
    return BooksAPI.update(book, newShelf)
  }

  const changeBookShelf = (book, newShelf) => {
    updateBookShelf(book, newShelf).then(() => {
      setBooks(
        books.map((currentBook) => {
          if (currentBook.id === book.id)
            return { ...currentBook, shelf: newShelf }
          else return currentBook
        })
      )
    })
  }

  const getShelfValue = (bookId) => {
    return books.find((book) => book.id === bookId)?.shelf || NONE
  }

  return (
    <div className="app">
      <Switch>
        <Route
          path="/search"
          render={(routeProps) => (
            <Search
              {...routeProps}
              updateBookShelf={updateBookShelf}
              getShelfValue={getShelfValue}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home
              {...routeProps}
              books={books}
              changeBookShelf={changeBookShelf}
              setBooks={setBooks}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default BooksApp
