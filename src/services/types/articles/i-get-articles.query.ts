import { IPagableQuery } from '@inet/services/types/shared/pagination'

export enum ArticleCreatedWithin {
  Today = 'today',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  All = 'all',
}

export interface IGetArticlesQuery extends IPagableQuery {
  createdWithin?: ArticleCreatedWithin
  categoryId?: number
  keyword?: string
  authorUsername?: string
}
