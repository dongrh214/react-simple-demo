/**
 * Created by dongruihe on 2017/7/20.
 */

import React from 'react'

import './index.less'
class Header extends React.Component {
    render() {
        return (
            <p className="header">{this.props.title}</p>
        )
    }
}

export default Header