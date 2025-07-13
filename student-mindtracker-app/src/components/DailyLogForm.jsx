import { useState } from 'react';

function DailyLogForm({ onAddEntry }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    studyHours: 0,
    sleepHours: 0,
    stressLevel: 3,
    reflection: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry(formData);
    setFormData({
      ...formData,
      studyHours: 0,
      sleepHours: 0,
      stressLevel: 3,
      reflection: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="log-form">
      <h2>Today's Log</h2>
      <div>
        <label>Study Hours:</label>
        <input 
          type="number" 
          value={formData.studyHours}
          onChange={(e) => setFormData({...formData, studyHours: e.target.value})}
        />
      </div>
      <div>
        <label>Sleep Hours:</label>
        <input 
          type="number" 
          value={formData.sleepHours}
          onChange={(e) => setFormData({...formData, sleepHours: e.target.value})}
        />
      </div>
      <div>
        <label>Stress Level (1-5):</label>
        <input 
          type="range" 
          min="1" 
          max="5" 
          value={formData.stressLevel}
          onChange={(e) => setFormData({...formData, stressLevel: e.target.value})}
        />
      </div>
      <div>
        <label>Reflection:</label>
        <textarea 
          value={formData.reflection}
          onChange={(e) => setFormData({...formData, reflection: e.target.value})}
        />
      </div>
      <button type="submit">Save Entry</button>
    </form>
  );
}

export default DailyLogForm;