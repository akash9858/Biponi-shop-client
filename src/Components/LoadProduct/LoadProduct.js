import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './LoadProduct.css';

const LoadProduct = (props) => {
    const history = useHistory()
    const handleBuyProduct = id => {
        const url = `checkout/${id}`
        history.push(url)
    }
    const { _id, name, price, imageURL } = props.event;
    return (
        <div className="container col-md-4">
            <Card className="custom shadow-sm p-2 bg-body rounded" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="App" ><b>{name}</b></Card.Title>
                </Card.Body>
                <div className="row">
                    <div className="col-md-6 ">
                        <Card.Text><strong>Price: {price} Taka</strong> </Card.Text>
                    </div>
                    <div className="col-md-6 mb-4 App">
                        <Card.Link ><Button onClick={() => handleBuyProduct(_id)} >Buy Now</Button> </Card.Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default LoadProduct;