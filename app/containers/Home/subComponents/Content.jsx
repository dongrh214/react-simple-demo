
import React from 'react'

class Content extends React.Component {
    render() {
        return (
            <button onClick={ this.props.clickMe }>也可以点我啊</button>
        )
    }
}

export default Content