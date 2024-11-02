import { useNavigate } from 'react-router-dom';

export default function Quiz() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/question');
    }
    
  return (
    <>
        <div className="container">
            <div className="header">
                <h1 className="bree-serif-regular">Build a self care routine suitable for you</h1>
            </div>
            <div>
                <p>Take out test to get a personalised self care routine based on your needs.</p>
            </div>
            <div className="start">
                <button onClick={redirect}>Start the quiz</button>
            </div>
        </div>
    </>
  );
}