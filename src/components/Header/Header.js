import React, {Component} from 'react';
import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("App").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("App").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
                <span className="navbar-brand master-icon" onClick={this.openNav}><i className="fa fa-book"/></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div id="mySidenav" className="sidenav">
                    <a href={"#top"} className="closebtn" onClick={this.closeNav}>&times;</a>
                    <span className="cat-title">Categories</span>
                    <a href={"#top"} className="category">Category #-#</a>
                    <a href={"#top"} className="category">Category #-#</a>
                    <a href={"#top"} className="category">Category #-#</a>
                    <a href={"#top"} className="category">Category #-#</a>
                </div>

            </nav>
        );
    }
}


export default Header;