import React from 'react';
import BookList from './BookList.js';
import { getBooks } from "../../services/api/books.js";

class Books extends React.Component {
    state = {
        bookList: [],
        loading: true,
        error: false,
    }

    componentDidMount() {
        getBooks().then((response) => {
          this.setState({ loading: false, bookList: response.data });
        });
      }

    render() {
        return(
            <div className="books-page-conteiner">
                <BookList 
                    bookList={this.state.bookList}
                    loading={this.state.loading}
                    error={this.state.error}
                />
                {this.state.loading && <div><h1>Loading...</h1></div>}
            </div>
        )
    }
}

export default Books;