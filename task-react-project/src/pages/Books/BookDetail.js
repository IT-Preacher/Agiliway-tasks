import React, { useState , useEffect } from "react";
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import { getBook } from '../../services/api/books.js';


function BookDetail() { 
    const [bookItem, setBookItem] = useState([]);
    const [loading, setStatus] = useState(true);
    const [error, catchError] = useState(false);
    const { id } = useParams();
    const {title, description} = bookItem

    useEffect(() => {

        getBook(id)
            .then((response) => {
                setBookItem(response.data);
                setStatus(false)
            })
            .catch(() => {
                
            });

    }, []);

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
    );
}

export default BookDetail;