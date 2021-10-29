import React from 'react';
import { Link } from 'react-router-dom';
import { getBook } from '../../services/api/books.js';


class BookDetail extends React.Component {
    state={
        bookItem:[],
        hrefParamId: this.props.match.params.id,
        loading: true,
        error: false,
    }

    componentDidMount() {
        getBook(this.state.hrefParamId).then((response) => {
            this.setState({ loading: false, bookItem: response.data });
          });
    }

    render() {
        console.log(this.state.bookItem)
        const {title, description} = this.state.bookItem

        return (
            <div className="book-detail-page">
                <div className="detail-conteiner">
                    <div className="item-book-detail">
                        <h2>{title}</h2>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                    <button className="button-back"><Link to="/books">Back</Link></button>
                </div>
            </div>
        )
    }
}

export default BookDetail;