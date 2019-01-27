import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import '../styles/Item.css'
import { observer } from 'mobx-react';

@observer
class Item extends Component {
    buyItem = e => {
        this.props.buyItem(this.props.item.name)
    }
    changeItem = e => {
        let newPrice = prompt(`New Price`, this.props.item.price)
        this.props.changeItem(this.props.item.name, newPrice)
    }
    render() {
        let item = this.props.item
        return (
            <li>
                <span onDoubleClick={this.changeItem}> {item.quantity} {item.name} available at $ {item.price} per item</span>
                <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}
export default Item