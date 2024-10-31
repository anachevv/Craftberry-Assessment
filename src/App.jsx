import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Question from './components/Question';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/question" element={<Question />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
