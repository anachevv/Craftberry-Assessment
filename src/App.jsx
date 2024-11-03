import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Question from './components/Question';
import Results from './components/Results';
import Products from './components/Products';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/question" element={<Question />} />
      <Route path="/results" element={<Results />} />
      <Route path="/products" element={<Products />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
