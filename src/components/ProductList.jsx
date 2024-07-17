

import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList({ products, addToCart }) {
    return (
        <div className="container-fluid"> {/* container-fluid ensure to uses the full width */}
            <div className="row justify-content-center">
                {products.map((productItem) => (
                    <div key={productItem.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={productItem.image} className="card-img-top" alt={productItem.title} />
                            <div className="card-body">
                                <h5 className="card-title">{productItem.title}</h5>
                                <p className="card-text">{productItem.category}</p>
                                <p className="card-text">Rs. {productItem.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(productItem)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
