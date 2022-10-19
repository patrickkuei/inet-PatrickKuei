import { IPagableQuery } from '../shared/pagination'

export enum ArticleCreatedWithin {
  Today = 'today',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export interface IGetArticlesQuery extends IPagableQuery {
  createdWithin?: ArticleCreatedWithin
  categoryId?: number
  keyword?: string
  authorUsername?: string
}