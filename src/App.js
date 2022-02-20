import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BookAroom from './components/pages/BookAroom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BookAroom />} exact />
      </Routes>
    </Router>
  );
}

export default App;
