import { action, observable, computed } from 'mobx'

class Item {
    @observable name
    @observable price = 0
    @observable quantity = 1
    constructor(name) {
        this.name = name
    }
}

class Inventory {
    @observable items = []
    @computed get numItems (){
        let count = 0
        this.items.forEach(item=>count +=item.quantity)
        return count
    } 
    @action addItem = (name) => {
        let index = this.items.findIndex(item => item.name === name)
        index !== -1 ? this.items[index].quantity++ : this.items.push(new Item(name))
    }
    @action buyItem = (name) => {
        let item = this.items.find(item => item.name === name)
        item.quantity === 1 ?
            this.items = this.items.filter(itm => item !== itm) :
            item.quantity--
    }
    @action changeItem = (name, price) => {
        this.items.find(item => item.name === name).price = price
    }
}

let inventory = new Inventory()
inventory.addItem(`cucumber`)
export default inventory