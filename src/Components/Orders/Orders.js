import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://blueberry-custard-29095.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email === loggedInUser.email
        );
        setOrders(filterData);
    };

    return (
        <div className="container">
            <h3 style={{ textAlign: "center" }}>
                Total Orders:{orders.length}{" "}
            </h3>
            <h2>Ordered by: {loggedInUser.email}</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Wight</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </Table>
            {orders.map((singleOrder) => {
                return (
                    <div>
                        <div className="container">
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>{singleOrder.name}</td>
                                        <td>1</td>
                                        <td>{singleOrder.wight}</td>
                                        <td>${singleOrder.price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Orders;
