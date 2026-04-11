export type GoalCategory = 'Holidays' | 'Renovation' | 'Gaming' | 'Savings';
 
export interface GoalProps {
    name: string,
    value: number,
    target: number,
    category: GoalCategory,
} 

export class Goal {

    public readonly id: string;
    public name: string;
    public value: number;
    public target: number;
    public category: GoalCategory;
    
    constructor(data: GoalProps) {

        this.id = crypto.randomUUID()
        this.name = data.name
        this.value = data.value;
        this.target = data.target;
        this.category = data.category;

        if (this.target <= 0) throw new Error('The value cannot be zero');
    }
}

