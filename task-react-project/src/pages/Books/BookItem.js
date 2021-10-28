import react from 'react';
import { Link } from "react-router-dom";

function BookItem(props) {
    let {id, title, description, publishDate} = props.bookItem
    
    return (
        <div className="book-item">
            <h2><Link to={`books/${id}`}>{title}</Link></h2>
            <p>
                {description.slice(1, 200)}
            </p>
            <span>{publishDate}</span>
        </div>
    )
}

export default BookItem;