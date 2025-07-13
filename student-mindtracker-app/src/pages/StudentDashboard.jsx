import { useState } from 'react';
import DailyLogForm from '../components/DailyLogForm';
import JournalEntry from '../components/JournalEntry';
import StreakCounter from '../components/StreakCounter';

function StudentDashboard() {
  const [entries, setEntries] = useState([]);
  const [streak, setStreak] = useState(0);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
    setStreak(streak + 1);
  };

  return (
    <div className="dashboard">
      <h1>MindTrack Journal</h1>
      <StreakCounter count={streak} />
      <DailyLogForm onAddEntry={addEntry} />
      <div className="entries">
        {entries.map((entry, index) => (
          <JournalEntry key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;