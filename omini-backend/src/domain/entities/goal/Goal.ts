import { GoalDTO } from "../../../dtos/GoalsDTO";

export class Goal {

    public readonly id: string;
    public value: number;
    public targetValue: number;
    public date: Date;
    public category: string;
    
    constructor(props: Omit<Goal, 'id' | 'progressBar'>, id?: string)  {

        this.id = id ?? crypto.randomUUID()
        this.value = props.value;
        this.targetValue = props.targetValue;
        this.date = props.date;
        this.category = props.category;

        if (this.targetValue <= 0) throw new Error('The value cannot be zero');
    }
    
    get progressBar(): number {
        const percentage = (this.value / this.targetValue) * 100
        return Math.round(percentage)
    }

}

