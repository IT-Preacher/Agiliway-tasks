import React from 'react';
import './Pagination.scss';

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav class="nav-pagination">
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (
                        <li key={`pagination-nav-${number}`}>
                            <a onClick={() => paginate(number)}href="#" className="page-link">
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Pagination;