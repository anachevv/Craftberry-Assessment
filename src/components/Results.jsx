import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAnswers } from '../utils/AnswersContext';

export default function Results() {
    const navigate = useNavigate();
    const [recommendations, setRecommendations] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [error, setError] = useState(null);
    const { answers } = useAnswers();

    console.log('Fetched Answers:', answers);

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

    const redirectToQuestion = () => {
        navigate('/question');
    };

    const redirectToProducts = () => {
        navigate('/products');
    };

    const addToWishlist = () => {
        alert('Added to wishlist!');
    }

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
                    <button onClick={redirectToQuestion}>Retake the quiz</button>
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
                    {recommendations.slice(1, 3).map((product) => (
                        <div className="rec-container">
                            <div key={product.id} className="product">
                                <img src={product.images[0]?.src} alt={product.title} />
                                <div className="wishlist">
                                    <img onClick={addToWishlist} src='./fav.png' alt='add to wishlist' />
                                </div>
                                <h3 className="bree-serif-regular">{product.title}</h3>
                                <p className="poppins-regular">{`$${product.variants[0].price}`}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more">
                    <img onClick={redirectToProducts} src="/next.png" alt="next" />
                </div>

                {/* <div>
                    <h2>Your Answers:</h2>
                    <ul>
                        {answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div> */}

            </div>
        </>
    );
}
