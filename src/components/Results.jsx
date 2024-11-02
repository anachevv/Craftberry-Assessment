import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Results() {
    const navigate = useNavigate();
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1');
                const data = await response.json();
                setRecommendations(data.products);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const redirect = () => {
        navigate('/question');
    };

    return (
        <>
            <div className="results-container">
                <div className="results-header">
                    <h1 className="bree-serif-regular">Build your everyday self-care routine.</h1>
                </div>
                <div className="results-paragraph">
                    <p className="poppins-regular">
                        Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made
                        with skin-natural nutrients that work with your skin to replenish moisture. With a light
                        formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing
                        relaxing fragrances, you can add a moment of calm to the end of your day.
                    </p>
                </div>

                <div className="retake">
                    <button onClick={redirect}>Retake the quiz</button>
                </div>
            </div>

            <div className="recommendation-container">
                <div className="recommendation">
                    <div className="recommendation-header">
                        <h3 className="bree-serif-regular">Daily routine</h3>
                    </div>

                    <div className="recommendation-paragraph">
                        <p className="poppins-regular">Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                    </div>
                </div>

                <div className="recommendations">
                    {/* <div className="recommendations-list"> */}
                    {recommendations.slice(1, 3).map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]?.src} alt={product.title} className="product-image" />
                            <h3 className="bree-serif-regular">{product.title}</h3>
                            <p className="poppins-regular">{`$${product.variants[0].price}`}</p>
                        </div>
                    ))}
                    {/* </div> */}
                </div>

            </div>
            {/* <div className="recommendations">
                <h2>Recommended Products</h2>
                <div className="recommendations-list">
                    {recommendations.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]?.src} alt={product.title} className="product-image" />
                            <h3 className="product-name">{product.title}</h3>
                            <p className="product-price">{`$${product.variants[0].price}`}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* {error && <p className="error-message">Error: {error}</p>} */}
        </>
    );
}