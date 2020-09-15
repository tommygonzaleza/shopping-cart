import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';
import ProductsData from '../ProductsData';

const ProductsView = () => {
    
    const [search, setSearch] = useState("");

    const handleChangeInput = e => {
        setSearch(e.target.value);
    }

    const results = !search ? ProductsData : ProductsData.filter((product) => 
        product.name.includes(search)
    )

    return (
        <div>
            <MyNavbar />
            <div className="section">
                <h2>Products</h2>
                <div>
                    <input placeholder="Search" value={search} onChange={handleChangeInput}></input>
                </div>
                <div className="products">
                    {results.map((product, idx) => (
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