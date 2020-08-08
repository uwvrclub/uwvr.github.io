/**
 * Inactive Class
 */

import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { CSSTransition } from 'react-transition-group'

const sections = [
    {
        title: "Resume",
        section: "resume"
    },
    {
        title: "Projects",
        section: "projects"
    },
    {
        title: "Experience",
        section: "experience"
    },
    {
        title: "Volunteering",
        section: "volunteering"
    },
]

class DropdownMenu extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            scrolled: false,
        };
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
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
                <div onClick={(e) => this.togglePanel(e)} className='container'>
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i class="fa fa-bars ml-1"></i>
                    </button>
                </div>
                {this.state.open ? (<div>
                    <ul class="navbar-nav text-uppercase ml-auto">
                        {sections.map(({ title, section }, index) =>
                            <Link
                                onClick={(e) => this.togglePanel(e)}
                                className='nav-item' to={section}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <a class="nav-link">{title}</a>
                            </Link>
                        )}
                    </ul>
                </div>) : null}
            </nav>
        )
    }
}

export default DropdownMenu