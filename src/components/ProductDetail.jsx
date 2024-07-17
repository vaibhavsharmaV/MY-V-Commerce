import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDescription({ products }) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find((item) => item.id === parseInt(productId));
        setProduct(foundProduct);
    }, [productId, products]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={product.image} alt={product.title} className="img-fluid product-image" />
                </div>
                <div className="col-md-6">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <h2 className="text-success">Rs. {product.price}</h2>
                    <p className="text-muted">{product.category}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;
