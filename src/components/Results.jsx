import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Results() {
  return (
    <>
        <div className="r-container">
            <div className="r-header">
                <h1 className="bree-serif-regular">Build you everyday self care routine.</h1>
            </div>
            <div>
                <p>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
            </div>
            <div className="start">
                <button onClick={redirect}>Start the quiz</button>
            </div>
        </div>
    </>
  );
}