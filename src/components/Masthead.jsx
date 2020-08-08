import React from 'react'
import Typing from 'react-typing-animation'

export default () => {
    return (
        <header class="masthead">
            <div class="container">
                <Typing speed={60}>
                    <span>
                        <div class="masthead-heading text-uppercase">UW VR</div>
                    </span>
                    <Typing.Delay ms={1000} />
                    <Typing.Speed ms={45} />
                    <span>
                        <div class="masthead-subheading">University of Waterloo Virtual Reality Club</div>
                    </span>
                </Typing>
            </div>
        </header>
    )
}