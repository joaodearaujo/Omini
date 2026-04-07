import { GoalService } from "../services/GoalService"

export class goalController {

    async handle(req: any, res: any) {
        const service = new GoalService
        const result = service.execute(req.body)
        return res.staus(201).json(result)
    }
}   