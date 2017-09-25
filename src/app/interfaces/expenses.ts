import { DetailExpenses } from '../interfaces/detail-expenses';

export interface Expenses {
    item:string,
    period:string,
    amount:string,
    description:string,
    details: DetailExpenses[]
}