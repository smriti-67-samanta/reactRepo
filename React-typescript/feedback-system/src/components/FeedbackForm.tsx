import { useState } from 'react';
import { Feedback } from '../types/feedback';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState<Feedback>({
    id: '',
    name: '',
    email: '',
    rating: 0,
    comments: '',
    date: new Date().toISOString(),
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback = {
      ...feedback,
      id: Date.now().toString(),
    };
    

    const existingFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    localStorage.setItem('feedback', JSON.stringify([...existingFeedback, newFeedback]));
    
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Thank you for your feedback!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={feedback.name}
          onChange={(e) => setFeedback({...feedback, name: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={feedback.email}
          onChange={(e) => setFeedback({...feedback, email: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Rating (1-5):</label>
        <input 
          type="number" 
          min="1" 
          max="5" 
          value={feedback.rating}
          onChange={(e) => setFeedback({...feedback, rating: Number(e.target.value)})}
          required
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea 
          value={feedback.comments}
          onChange={(e) => setFeedback({...feedback, comments: e.target.value})}
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;