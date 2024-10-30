import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Question1 from './components/Question1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/question-1" element={<Question1 />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
