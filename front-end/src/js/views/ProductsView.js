import React from 'react';
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';
import ProductsData from '../ProductsData';

const ProductsView = () => {
    return (
        <div>
            <MyNavbar />
            <div className="section">
                <h2>Products</h2>
                <div className="products">
                    {ProductsData.map((product, idx) => (
                        <div className="product-card" key={idx}>
                            <Link to={`/product-details/${product.id}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <h3>
                                <Link to={`/product-details/${product.id}`}>{product.name}</Link>
                            </h3>
                            <h6>{product.price}</h6>
                            <button>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default ProductsView;