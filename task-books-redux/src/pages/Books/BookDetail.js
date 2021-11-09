import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getBook } from "../../services/api/books.js";
import { connect } from "react-redux";

class BookDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDataBook(id);
  }

  render() {
    const { title, description } = this.props.bookItem;
    console.log("book props ", this.props);
    return (
      <div className="book-detail-page">
        <div className="detail-conteiner">
          <div className="item-book-detail">
            <h2>{title}</h2>
            <div>
              <p>{description}</p>
            </div>
          </div>
          <button className="button-back">
            <Link to="/books">Back</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookItem: state.book.bookItem,
  loading: state.book.loading,
  error: state.book.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDataBook: (id) => {
      dispatch(getBook(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

//   const [bookItem, setBookItem] = useState([]);
//   const [loading, setStatus] = useState(true);
//   const [error, catchError] = useState(false);
//   const { id } = useParams();
//   const { title, description } = bookItem;

//   useEffect(() => {
//     getBook(id)
//       .then((response) => {
//         setBookItem(response.data);
//         setStatus(false);
//       })
//       .catch(() => {});
//   }, []);
