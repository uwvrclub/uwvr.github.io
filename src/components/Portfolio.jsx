import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import imgSource from '../data/imgLinks.json'
import "react-alice-carousel/lib/alice-carousel.css"

export default ({ projectsLinks }) => {
    return (
        <section className="page-section bg-light" id="projects">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Events</h2>
                    <h3 class="section-subheading text-muted">Snaps from our earlier events</h3>
                </div>
                <div>
                    <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled={true}>
                        {imgSource && imgSource.map(({ img }, index) =>
                            <img src={img} style={{ "display": "block", "width": "100%", "height": "500px", "objectFit": "cover" }} />
                        )}
                    </AliceCarousel>
                </div>
            </div>
        </section>
    )
}