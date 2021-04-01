import React, { useEffect, useState } from 'react';
import LoadProduct from '../LoadProduct/LoadProduct';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])



    return (
        <div className="container ">
            <div className="row">
                {
                    events.length === 0 && <CircularProgress color="secondary" />
                }
                {
                    events.map(event => <LoadProduct event={event}></LoadProduct>)
                }
            </div>
        </div>
    );
};

export default Home;