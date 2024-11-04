import { Routes, Route } from 'react-router-dom';
import { AnswersProvider } from '../src/utils/AnswersContext';
import Quiz from './components/Quiz';
import Question from './components/Question';
import Results from './components/Results';
import Products from './components/Products';


function App() {
  return (
    <AnswersProvider>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/question" element={<Question />} />
        <Route path="/results" element={<Results />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </AnswersProvider>
  );
}

export default App;
