import React, { Component } from 'react'
import './index.css'

export default class Demo01 extends Component {
    render(){
        return (
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { className: 'title' },
                    "React 小书"
                )
            )
        )
    }
}