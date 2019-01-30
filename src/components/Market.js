import React, { Component } from 'react'
import Item from './Item';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
// import '../styles/Market.css'

@inject(`Inventory`)
@observer
class Market extends Component {
    state = {
        newItem: ``
    }
    inputChange = e => this.setState({ newItem: e.target.value })
    addItem = e => {
        if (this._checkForEnterKey(e.which)) {
            this.props.Inventory.addItem(this.state.newItem)
            this.setState({ newItem: `` })
        }
    }
    buyItem = (name) => {
        this.props.Inventory.buyItem(name)
    }
    changeItem = (name, price) => {
        this.props.Inventory.changeItem(name, price)
    }
    _checkForEnterKey = (num) => num === 13 ? true : false
    render() {
        return (
            <div>
                <div>
                    {this.props.Inventory.numItems}
                </div>
                <input type="text"
                    onChange={this.inputChange}
                    onKeyPress={this.addItem}
                    value={this.state.newItem}
                />
                {this.props.Inventory.items.map((item, index) => <Item
                    key={item.name}
                    index={index}
                />)}

            </div>
        )
    }
}
export default Market