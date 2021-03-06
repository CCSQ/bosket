import React from "react"

import "self/common/styles/IntroductionDemos.css"

import { ComponentDemo } from "self/react/components/ComponentDemo/ComponentDemo"
import { ChuckNorris } from "self/react/components/Demos/ChuckNorris/ChuckNorris"
import { HackerNews } from "self/react/components/Demos/HackerNews/HackerNews"
import { Pokeapi } from "self/react/components/Demos/Pokeapi/Pokeapi"

export class IntroductionDemos extends React.PureComponent<*, *> {

    demos = [ "HackerNews", "Pokeapi", "ChuckNorris" ]
    state = { demo: this.demos[0] }

    renderDemo() {
        const Component =
            this.state.demo === "ChuckNorris" ? ChuckNorris :
                this.state.demo === "HackerNews" ? HackerNews :
                    this.state.demo === "Pokeapi" ? Pokeapi :
                        null

        const files = [
            `./components/Demos/${this.state.demo}/${this.state.demo}.js`,
            `../common/styles/${this.state.demo}.css`,
            `./components/Demos/${this.state.demo}/models.js`
        ]

        return (
            <ComponentDemo files={ files }>
                <Component />
            </ComponentDemo>
        )
    }

    renderButtons() {
        return this.demos.map(demo =>
            <button onClick={ ev => this.setState({ demo: demo }) } key={ demo } className={ this.state.demo === demo ? "selected" : "" }>
                { demo }
            </button>)
    }

    render = () =>
        <div className="IntroductionDemos">
            <div className="center-text">
                <span className="button-row">{ this.renderButtons() }</span>
            </div>
            { this.renderDemo() }
        </div>
}
