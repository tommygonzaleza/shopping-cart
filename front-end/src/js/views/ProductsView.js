import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';

const ProductsView = () => {
    
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = () => {
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
                console.log(res.status);
                return res.json();
            }).then(res2 => {
                let data = res2;
                console.log(data);
                for(let i = 0; i < data.length; i++){
                    handleProducts(data[i]);
                }
                console.log(products);
            }).catch(error => {
                console.log(error);
            });
        }
        fetchProducts();
    }, [])

    const handleProducts = (data) => {
        let currentProducts = products;
        currentProducts.push(data);
        setProducts([...products, currentProducts]);
    }

    const handleChangeInput = e => {
        setSearch(e.target.value);
    }

    const results = !search ? products : products.filter((product) => 
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