import type { TransactionProps } from "../features/Transactions/Transactions.type";
import type { GoalCardProps } from "../features/Goals/Goals.type";

export const MOCK_TRANSACTIONS: TransactionProps[] = [
  {
    id: "7b2d1a3e-5c4b-4a2f-9d1e-8f0a3b2c1d4e",
    receiver: "Amazon Services",
    category: "Essentials", 
    date: "2025-10-12", 
    amount: 145.20
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    receiver: "Whole Foods Market",
    category: "Food",     
    date: "2025-10-10",
    amount: 282.35
  },
  {
    id: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    receiver: "Netflix",
    category: "Lifestyle", 
    date: "2025-10-08",
    amount: 55.90
  },
  {
    id: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
    receiver: "Gas Station",
    category: "Transport",
    date: "2025-10-05",
    amount: 210.00
  },
  {
    id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
    receiver: "Apple Health",
    category: "Health",
    date: "2025-10-03",
    amount: 45.00
  },
  {
    id: "9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c",
    receiver: "Starbucks",
    category: "Food",
    date: "2025-10-01",
    amount: 18.50
  },
  {
    id: "3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a",
    receiver: "Pharmacy",
    category: "Health",
    date: "2025-09-28",
    amount: 120.00
  },
  {
    id: "1f2a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c",
    receiver: "Uber",
    category: "Transport",
    date: "2025-09-25",
    amount: 35.40
  }
];

export const MOCK_GOALS: GoalCardProps[] = [
  {
    id: "goal-001",
    value: 12500, 
    date: '15/12/26', 
    label: 'Holidays'
  },
  {
    id: "goal-002",
    value: 4500, 
    date: '20/08/26', 
    label: 'Renovation'
  },
  {
    id: "goal-003",
    value: 3500, 
    date: '10/05/26', 
    label: 'Gaming'
  },
  {
    id: "goal-004",
    value: 100000, 
    date: '01/01/30', 
    label: 'Savings'
  },
  {
    id: "goal-005",
    value: 2500, 
    date: '12/10/25', 
    label: 'New Bike'
  },
  {
    id: "goal-006",
    value: 8000, 
    date: '05/03/27', 
    label: 'MacBook Pro'
  }
];