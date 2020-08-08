import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import sections from '../data/sections.json'


class Navigationbar extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        });;
    }



    render() {
        return (
            <nav className={this.state.scrolled ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" : "navbar navbar-expand-lg navbar-dark fixed-top"} id="mainNav">
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        {sections.map(({ title, section }, index) =>
                            <Link
                                className='nav-item' to={section}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <a class="nav-link">{title}</a>
                            </Link>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigationbar