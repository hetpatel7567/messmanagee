// src/hooks/useGroceries.js

import { useState, useEffect } from 'react';

export function useGroceries() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    // Fetch groceries data from the API
    fetch('/api/groceries')
      .then(res => res.json())
      .then(data => setGroceries(data))
      .catch(err => console.error(err));
  }, []);

  return groceries;
}
