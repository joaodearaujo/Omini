import GoalsCard from "../../../ui/GoalsCard/GoalsCard"
import FloatingCard from "../../../ui/FloatingCard/FloatingCard"

interface GoalsListProps {
  goals: any[];   
  isLoading: boolean; 
}

const GoalsList = ({ goals, isLoading }: GoalsListProps) => {
  
  if (isLoading) return <FloatingCard><p className="text-white">Loading goals...</p></FloatingCard>;

  if (goals.length === 0) return <FloatingCard><p className="text-gray-500">No goals found.</p></FloatingCard>;

  return (
    <FloatingCard>
      {goals.map((item) => (
        <div key={item.id} className="mb-4 last:mb-0">
          <GoalsCard {...item} />
        </div>
      ))}
    </FloatingCard>
  );
}

export default GoalsList;