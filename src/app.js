import React from 'react';
import PropTypes from 'prop-types';
export class App extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            buyItems: ['milk', 'bread', 'fruit', 'ham'],
            message: '',
            count: []
        }
    }
    addItem(e){
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;
        const isOnTheList = buyItems.includes(newItem);

        if(isOnTheList){
            this.setState ({
                message: 'This item is already on the list.'
            })
            this.addForm.reset();
        }else{
            newItem !== '' && this.setState({
                buyItems: [...this.state.buyItems, newItem],
                message: ''
            })
            this.addForm.reset();
        }
    }
    removeItem(item){
        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        });

        this.setState({
            buyItems: [...newBuyItems]
        })

        if(newBuyItems.length === 0){
            this.setState({
                message: 'No items on your list.'
            })
        }
    }
    removeAllItems(){
        this.setState({
            buyItems: [],
            message : 'No items on your list.'
        })
    }

    render(){
        const {buyItems, message, count} = this.state;
        return (
            <div>
                <header>
                    <h1>Shopping List</h1>
                    <form className="form-inline" ref={input => this.addForm = input} onSubmit={(e) => {this.addItem(e)}}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                            <input ref={input => this.newItem = input} type="text" placeholder="New Item" className="form-control" id="newItemInput" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>                    
                </header> 
                {
                    message !== '' && <p className="message text-danger top-space">{message}</p>
                }
                {
                buyItems.length > 0 &&
                    <table className="table table-striped">
                        <caption>Shopping List</caption>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyItems.map(item => {
                                    return (
                                    <tr key={item}>
                                    <th scope="row"></th>
                                    <td>{item}</td>
                                    <td>
                                        <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">Remove</button>
                                    </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">&nbsp;</td>
                                <td className="text-right">
                                <button onClick={(e) => this.removeAllItems()} type="button" className="btn btn-default btn-sm top-space">Remove all items</button>
                                </td>
                            </tr>
                        </tfoot>
                        </table>
                }
            </div>
        )
    }
}