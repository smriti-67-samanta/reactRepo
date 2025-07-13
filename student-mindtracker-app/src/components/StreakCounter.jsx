function StreakCounter({ count }) {
  return (
    <div className="streak-counter">
      <p>🔥 Current Streak: {count} days</p>
      {count > 2 && <p>Keep it up!</p>}
    </div>
  );
}

export default StreakCounter;