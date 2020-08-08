import React from 'react'

const css = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default ({ coops }) => {
    return (
        <section class="page-section" id="experience">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Who are we?</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                <ul class="timeline">
                    {coops && coops.map(({ org, role, imgLink }, index) =>
                        <li className={(index % 2 === 0) ? "" : "timeline-inverted"}>
                            <div className="timeline-image"><img class="rounded-circle img-fluid" src={imgLink} alt="" style={css} /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="subheading">{org}</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">{role}</p></div>
                            </div>
                        </li>
                    )}
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <a href="#">
                                <h4>Be Part
                    <br />Of Our
                    <br />Story!
                  </h4>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}