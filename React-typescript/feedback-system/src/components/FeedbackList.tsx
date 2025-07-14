import { useEffect, useState } from 'react';
import { Feedback } from '../types/feedback';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedbackList(JSON.parse(storedFeedback));
    }
  }, []);

  return (
    <div>
      <h2>Customer Feedback</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Comments</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.rating}/5</td>
                <td>{item.comments}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackList;