import React from 'react';

import Header from '../../components/Header'
import Content from './subComponents/Content'


class Home extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state  = {
            text: 0
        }
    }
    render () {
        return (
            <div>
                <Header title="头部"/>
                <button onClick={ this.clickMe.bind(this) }>点我啊</button>
                <br/>
                <Content clickMe={ this.clickMe.bind(this) } />
                <div>{ this.state.text }</div>
            </div>
        )
    }
    clickMe(){
        const i = this.state.text + 1;
        this.setState({
            text: i
        })
    }
}

export default Home