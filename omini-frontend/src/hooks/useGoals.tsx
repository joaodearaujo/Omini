import { useState, useCallback } from 'react';
import type { GoalCardProps } from '../components/ui/GoalsCard/GoalsCard';
import { MOCK_GOALS } from '../components/mock/MOCK_GOALS';

export const useGoals = () => {
  const [goals, setGoals] = useState<GoalCardProps[]>(MOCK_GOALS);
  const [loading, setLoading] = useState(false);

  const fetchGoals = useCallback(async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setGoals([...MOCK_GOALS]);
    setLoading(false);
  }, []);

  const addGoal = useCallback((newGoal: GoalCardProps) => {
    setGoals(prev => [...prev, newGoal]);
  }, []);

  return { goals, refresh: fetchGoals, loading, addGoal };
};
