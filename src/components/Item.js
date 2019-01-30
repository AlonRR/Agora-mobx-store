import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import '../styles/Item.css'
import { observer, inject } from 'mobx-react';

@inject(`Inventory`)
@observer
class Item extends Component {
    state = {
        item: this.props.Inventory.items[this.props.index]
    }
    buyItem = e => {
        this.props.Inventory.buyItem(this.state.item.name)
    }
    changeItem = e => {
        let newPrice = prompt(`New Price`, this.state.item.price)
        this.props.Inventory.changeItem(this.state.item.name, newPrice)
    }
    render() {
        // let item = this.props.Inventory.items[this.props.index]
        return (
            <li>
                <span onDoubleClick={this.changeItem}> {this.state.item.quantity} {this.state.item.name} available at $ {this.state.item.price} per item</span>
                <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}
export default Item