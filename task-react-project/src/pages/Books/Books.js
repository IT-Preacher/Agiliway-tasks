import React from "react";
import BookList from "./BookList.js";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { getBooks } from "../../services/api/books.js";

class Books extends React.Component {
  state = {
    bookList: [],
    currentPageElements: [],
    totalElementsCount: 0,
    elementsPerPage: 10,
    pagesCount: 1,
    loading: true,
    error: false,
  };

  componentDidMount() {
    getBooks().then((response) => {
      this.setState({ loading: false, bookList: response.data });
    });
  }

  handleChange(page, pageSize) {}

  render() {
    const {
      bookList,
      loading,
      error,
      elementsPerPage,
      pagesCount,
    } = this.state;

    return (
      <div className="books-page-conteiner">
        <BookList bookList={bookList} loading={loading} error={error} />
        {/* <BookList /> */}
        <Pagination
          onChange={(page, pageSize) => handleChange(page, pageSize)}
          defaultCurrent={1}
          total={bookList.length}
          pageSize={elementsPerPage}
        />
        {this.state.loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Books;
