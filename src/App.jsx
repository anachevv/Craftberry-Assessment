import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/question-1" element={<Question1 />} />
      <Route path="/question-2" element={<Question2 />} />
      <Route path="/question-3" element={<Question3 />} />
      <Route path="/question-4" element={<Question4 />} />
      <Route path="/question-5" element={<Question5 />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
