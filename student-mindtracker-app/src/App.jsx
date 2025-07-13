import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;