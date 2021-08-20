import React from 'react'
import '../App.css'

const Book = (props) => {
  const { book, shelfValue, changeBookShelf } = props

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book?.imageLinks?.thumbnail}")`
          }}
        />
        <div className="book-shelf-changer">
          <select
            defaultValue={shelfValue}
            onChange={(event) => changeBookShelf(event.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>

      {book.authors?.map((author) => {
        return (
          <div className="book-authors" key={author}>
            {author}
          </div>
        )
      })}
    </div>
  )
}

export default Book
