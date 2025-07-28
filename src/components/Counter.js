// react-app/src/components/Counter.js

import React, { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount]       = useState(0);
  const [loading, setLoading]   = useState(false);

  // Load initial count
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/api/count')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .finally(() => setLoading(false));
  }, []);

  // Handlers for increment/decrement
  const increment = () => {
    setLoading(true);
    fetch('http://localhost:4000/api/count/increment', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .finally(() => setLoading(false));
  };

  const decrement = () => {
    setLoading(true);
    fetch('http://localhost:4000/api/count/decrement', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .finally(() => setLoading(false));
  };

  return (
    <section aria-labelledby="counter-label">
      <h2 id="counter-label">Current Count</h2>
      {loading ? (
        <p role="status">Loading...</p>
      ) : (
        <p className="counter-display">{count}</p>
      )}
      <button
        onClick={decrement}
        aria-label="Decrement value"
        disabled={loading}
      >
        –
      </button>
      <button
        onClick={increment}
        aria-label="Increment value"
        disabled={loading}
      >
        +
      </button>
    </section>
  );
}
