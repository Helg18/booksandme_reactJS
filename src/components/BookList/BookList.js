import React, {Component} from 'react';
import './BookList.css';

class BookList extends Component {
    render() {
        return (
            <div className={"col-md-2"}>
                <div className="card">
                    <img
                        src="https://olcovers2.blob.core.windows.net/coverswp/2018/12/seeing-theory_OpenLibra-110x153.jpg"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Title's Book</p>
                        <p className="card-text">Category</p>
                        <p className="card-text">Sub-category</p>
                        <p className="card-text">Link</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;