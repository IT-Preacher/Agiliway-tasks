import React from 'react';

class Pagination extends React.Component {
    state = {
        pages: Math.round(props.listBooks.length / dataLimit),
        currenPage: 1,
    }

    goToNextPage() {
        this.setState({currenPage: currenPage +1});
    }

    goToPreviousPage() {
        this.setState({currenPage: currenPage -1});
    }

    changePage(event) {
        const pageNumber = Number(event.target.textContent);
        this.setState({currenPage: pageNumber});
    }

    getPaginatedData = () => {
        // not yet implemented
    };
   
    getPaginationGroup = () => {
        // not yet implemented
    };

    render() {

    }
}

export default Pagination;

// this.state = {
//     offset: 0,
//     currentPageElements: [],
//     elementsPerPage: 12,  //change as per your need
//     pagesCount: 1,
//     allElements: [],
//     totalElementsCount: 0
// }

// componentDidMount() {
//     this.getAllElements();
// }

// async getAllElements() {
//         const allElements = await Axios.get("https://jsonplaceholder.typicode.com/posts");
//         console.log(allElements);
//         this.setState({
//             allElements: allElements.data,
//             totalElementsCount: allElements.data.length
//         }, () => {
//             this.setPaginationStates();
//         });
//     }

//     setPaginationStates = () => {
//         const { totalElementsCount, elementsPerPage } = this.state;
//         this.setState({
//             pagesCount: Math.ceil(totalElementsCount / elementsPerPage)
//         }, () => {
//             this.setElementsForCurrentPage();
//         });
//     }

//     setElementsForCurrentPage = () => {
//         const { allElements, offset, elementsPerPage } = this.state;
//         const currentPageElements = allElements.slice(offset, offset + elementsPerPage);
//         this.setState({
//             currentPageElements
//         });
//     }
//     const { totalElementsCount, pagesCount, elementsPerPage } = this.state;
//     <Pagination
//         defaultCurrent={1}
//         onChange={this.handlePageClick}
//         size="small"
//         total={totalElementsCount}
//         showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
//         pageSize={elementsPerPage}
//         showSizeChanger={false}
//     />