import { useState } from "react";

export function useGoals() {
    const [goals, setGoals] = useState([]);

    const addGoal = async (data: any) => {
        
        const repsonse = await fetch('', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        const newGoal = await repsonse.json();
        setGoals(newGoal)
    }

    return { goals, addGoal };
}