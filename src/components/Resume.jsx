import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
const pdfFile = './resume.pdf'

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            layoutMode: this.getLayoutMode()
        }
        this.onResize = this.onResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
        });
    }

    getLayoutMode() {
        return window.innerWidth > 1000 ? 'desktop' : 'mobile';
    }

    render() {
        return (
            <div className="page-section" id="resume">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Resume</h2>
                        <h3 className="section-subheading text-muted">A quick run-down of what I've been up to</h3>
                    </div>
                    <div className="row text-center" style={{ justifyContent: 'center' }}>
                        <Document
                            file={pdfFile}
                            width={this.state.layoutMode === 'desktop' ? "100pc" : (window.innerWidth)}
                        >
                            <Page
                                pageNumber={1}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                                width={this.state.layoutMode === 'desktop' ? "" : (window.innerWidth)}></Page>
                        </Document>
                    </div>
                </div>
            </div >
        );
    }
}

export default Resume