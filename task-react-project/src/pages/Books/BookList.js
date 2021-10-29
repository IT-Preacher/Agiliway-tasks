import React from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import BookItem from './BookItem.js';
import { getBooks } from "../../services/api/books.js";

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
            <Pagination
                defaultCurrent={1} 
                total={bookList.length} 
                pageSize={10}
            ></Pagination>
        </div>
    )
}

export default BookList;

// function BookList({bookList, loading, error}) {
//     return (
//         <div className="book-list-conteiner">
//             <h1>Book List</h1>
//             {
//                 bookList.map((bookItem, i) => {
//                     return(<BookItem 
//                         key={bookItem.id}
//                         bookItem={bookItem}
//                     />)
//                 })
//             }
//         </div>
//     )
// }