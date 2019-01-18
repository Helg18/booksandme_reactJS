import React, {Component} from 'react';
import Categories from '../Categories/Categories';
import Books from '../../books';
import './BookList.css';

class BookList extends Component {

    getBooks = json => json.map(function (book) {
        console.log(book);
        return (
            <div className={"col-md-2"} key={book['ID']}>
                <div className="card">
                    <img
                        src={book['thumbnail']}
                        className="card-img-top" alt={book['title']}/>
                    <div className="card-body">
                        <p className="card-text title">{book['title']} - {book['author']}</p>
                        <p className="card-text lang">Pages: {book['pages']} | Lang: {book['language']}</p>
                        <p className="card-text categories">
                            <Categories categories={book['categories']}/>
                        </p>
                        <p className="card-text card-foot">
                            <button className="btn btn-outline-danger form-control">Ver</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    });

    render() {
        return (
            <div className="row">
                {this.getBooks(Books)}
            </div>
        );
    }
}

export default BookList;