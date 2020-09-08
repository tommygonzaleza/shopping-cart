import React from 'react';
import MyNavbar from '../components/MyNavbar';
import ProductsData from '../ProductsData';

const HomeView = () => {
    return (
        <div>
            <MyNavbar />
            <div className="products">
                {ProductsData.map((product, idx) => (
                    <div className="product-card" key={idx}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h6>{product.price}</h6>
                        <p>{product.description}</p>
                        <button href={product.id}>More Info</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeView;