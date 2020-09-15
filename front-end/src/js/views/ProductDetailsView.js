import React, { useState } from 'react';
import MyNavbar from '../components/MyNavbar';
import ProductsData from '../ProductsData';

const ProductDetailsView = (props) => {

    const p = Number(props.match.params.id);
    const result = ProductsData.filter((product) => product.id === p);
    return (
        <div>
            <MyNavbar />
            <div className="product-details">
                <img src={result[0].image} />
                <div>
                    <h2>{result[0].name}</h2>
                    <h6>Price: {result[0].price}</h6>
                    <p>{result[0].description}</p>
                    <button>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetailsView;