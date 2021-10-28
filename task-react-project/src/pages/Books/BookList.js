import React from 'react';
import BookItem from './BookItem.js';

function BookList({bookList, loading, error}) {
    return (
        <div className="book-list-conteiner">
            <h1>Book List</h1>
            {
                bookList.map((bookItem, i) => {
                    return(<BookItem 
                        key={bookItem.id}
                        bookItem={bookItem}
                    />)
                })
            }
        </div>
    )
}

export default BookList;