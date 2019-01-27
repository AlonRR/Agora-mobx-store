import React, { Component } from 'react'
import Item from './Item';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react';
// import '../styles/Market.css'

@observer
class Market extends Component {
    addItem = e => {
        if (e.which === 13) {
            this.props.inventory.addItem(e.target.value)
        }
    }
    buyItem = (name) => {
        this.props.inventory.buyItem(name)
    }
    changeItem = (name, price) => {
        this.props.inventory.changeItem(name, price)
    }
    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.addItem} />
                {this.props.inventory.items.map(item => <Item
                    buyItem={this.buyItem}
                    changeItem={this.changeItem}
                    item={item}
                />)}
            </div>
        )
    }
}
export default Market