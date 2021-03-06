import React from 'react';
import Orderstore from "../../../../stores/OrderStore";
import OrderActions from '../../../../actions/OrderActions';

class OrdersResult extends React.Component{

    constructor(){
        super();
        this.state = {orders : [], id : 0};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({orders : Orderstore._orders})
        OrderActions.list();
    }

    componentDidMount(){
        Orderstore.addChangeListener(this._onChange)
        OrderActions.list();
    }

    componentWillUnmount(){
        Orderstore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>User first name</td>
                    <td>User last name</td>
                    <td>Postal code</td>
                    <td>Street</td>
                    <td>Phone number</td>
                    <td>Comments</td>
                    <td>Delivered</td>
                    <td>Pizzas</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.orders.map((order)=>{
                        return(
                            <tr key={order.id}>
                                <td>{order.customer.firstName}</td>
                                <td>{order.customer.lastName}</td>
                                <td>{order.customer.postalCode}</td>
                                <td>{order.customer.street}</td>
                                <td>{order.customer.phoneNumber}</td>
                                <td>{order.customer.comments}</td>
                                <td>{order.delivered ? "Delivered":"Not delivered"}</td>
                                <td><ol>{order.pizzas.map((pizza)=>{

                                    return (<li key={Math.floor(Math.random() * 10000) + 1}>{pizza.pizza.name}</li>)
                                })}</ol></td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}
export default OrdersResult;