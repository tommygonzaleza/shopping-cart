import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';
import ProductsData from '../ProductsData';

const ProductsView = () => {
    
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:5000/product",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" 
                }
            }
        ).then(response => {
            let res = response.clone();
            console.log(res.ok);
            console.log(res.status);
            console.log(res.text());
        }).then(data => {
            console.log(data);
            setProducts(data);
        }).catch(error => {
            console.log(error);
        });
    })

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