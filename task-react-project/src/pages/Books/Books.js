import React, { useState , useEffect } from "react";
import BookList from "./BookList.js";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { getBooks } from "../../services/api/books.js";

function Books() {
  const [bookList, setBookList] = useState([]);
  const [loading, setStatus] = useState(true);
  const [error, catchError] = useState(false);

  useEffect(() => {

    getBooks()
        .then((response) => {
            setBookList(response.data);
            setStatus(false);
        })
        .catch((reject) => {
          catchError(reject);
          throw new Error(reject)
        });

  }, []);

  return (
    <div className="books-page-conteiner">
      <BookList bookList={bookList} loading={loading} error={error} />
      {/* <Pagination
        defaultCurrent={1}
        total={bookList.length}
      /> */}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default Books;


// class Books extends React.Component {
//     state = {
//       bookList: [],
//       currentPageElements: [],
//       totalElementsCount: 0,
//       elementsPerPage: 10,
//       pagesCount: 1,
//       loading: true,
//       error: false,
//     };
  
//     componentDidMount() {
//       getBooks().then((response) => {
//         this.setState({ loading: false, bookList: response.data });
//       });
//     }
  
//     handleChange(page, pageSize) {}
  
//     render() {
//       const {
//         bookList,
//         loading,
//         error,
//         elementsPerPage,
//         pagesCount,
//       } = this.state;
  
//       return (
//         <div className="books-page-conteiner">
//           <BookList bookList={bookList} loading={loading} error={error} />
//           {/* <BookList /> */}
//           <Pagination
//             onChange={(page, pageSize) => handleChange(page, pageSize)}
//             defaultCurrent={1}
//             total={bookList.length}
//             pageSize={elementsPerPage}
//           />
//           {this.state.loading && (
//             <div>
//               <h1>Loading...</h1>
//             </div>
//           )}
//         </div>
//       );
//     }
//   }