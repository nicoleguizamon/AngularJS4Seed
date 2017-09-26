import { DetailExpenses } from '../interfaces/detail-expenses';

export interface Expenses {
    id:string,
    item:string,
    period:string,
    amount:string,
    description:string,
    details: DetailExpenses[]
}