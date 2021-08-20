import React from 'react'
import '../App.css'
import Book from './Book'

const BookShelf = (props) => {
  const { books, changeBookShelf, title } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                changeBookShelf={(shelf) => changeBookShelf(book, shelf)}
                shelfValue={book.shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
