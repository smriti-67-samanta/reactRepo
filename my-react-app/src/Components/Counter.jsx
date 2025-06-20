import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/Actions';

export const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter </h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Current State:</h3>
        <pre>{JSON.stringify({ count }, null, 2)}</pre>
      </div>
    </div>
  );
};