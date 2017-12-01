import React from 'react';
import PropTypes from 'prop-types';
export class App extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            buyItems: ['milk', 'bread', 'fruit', 'ham']
        }
    }
    addItem(e){
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        this.setState({
            buyItems: [...this.state.buyItems, newItem]
        })
        this.addForm.reset();
    }
    render(){
        const {buyItems} = this.state;
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
                                <td>Button</td>
                                </tr>)
                            })
                        }
                    </tbody>
                    </table>
                

            </div>
        )
    }
}