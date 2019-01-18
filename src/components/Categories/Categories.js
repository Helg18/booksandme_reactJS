import React, {Component} from 'react';
import './Categories.css';

class Categories extends Component {

    getCategories = categories => categories.map(function (category) {
        return (
            <span className="badge badge-pill badge-danger" key={category['category_id']}>{category['name']}</span>
        );
    });

    render() {
        return this.getCategories(this.props.categories)
    }

}

export default Categories;