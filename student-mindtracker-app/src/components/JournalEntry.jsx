function JournalEntry({ entry }) {
  return (
    <div className="entry">
      <h3>{entry.date}</h3>
      <p><strong>Study:</strong> {entry.studyHours} hours</p>
      <p><strong>Sleep:</strong> {entry.sleepHours} hours</p>
      <p><strong>Stress:</strong> {entry.stressLevel}/5</p>
      <p><strong>Reflection:</strong> {entry.reflection}</p>
    </div>
  );
}

export default JournalEntry;