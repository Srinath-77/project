import React, { Component } from 'react'

export default class FormList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                JSON.stringify(this.props.qp)
            </div>
        )
    }
}
