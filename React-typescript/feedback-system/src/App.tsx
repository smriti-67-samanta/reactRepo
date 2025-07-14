import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App = () => {
  return (
    <div>
      <h1>Aromatic Bar Feedback System</h1>
      <FeedbackForm />
      <hr />
      <FeedbackList />
    </div>
  );
};

export default App;