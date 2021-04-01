import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {

  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      wight: data.wight,
      price: data.price,
      imageURL: imageURL,
      quantity: data.quantity
    };
    const url = `http://localhost:5000/addEvent`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set('key', '14f7634ce0532a2720987f77ae85d749');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Add Product</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Product name</Form.Label>
          <Form.Control
            name="name"
            placeholder="Product Name"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Wight</Form.Label>
          <Form.Control
            name="wight"
            placeholder="Product wight"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product price</Form.Label>
          <Form.Control
            name="price"
            placeholder="Product price"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product quantity</Form.Label>
          <Form.Control
            name="quantity"
            placeholder="Product quantity"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            name="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
        </Form.Group>
        <input className="btn btn-primary" type="submit" />
      </Form>
    </div>

  );
};

export default AddProduct;