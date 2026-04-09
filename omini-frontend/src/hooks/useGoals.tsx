import { useState, useEffect } from 'react';

export const useGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = async () => {
    const res = await fetch('http://localhost:3333/goals');
    const data = await res.json();
    setGoals(data);
    setLoading(false);
  };

  useEffect(() => { fetchGoals(); }, []);

  return { goals, refresh: fetchGoals, loading };
};