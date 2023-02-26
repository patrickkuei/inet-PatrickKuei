import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import { IAuthorViewModel } from '@inet/services/types/shared/i-author.view-model'

export interface IArticleViewModel {
  id: number
  category: IArticleCategoryViewModel
  author: IAuthorViewModel
  coverImageUrl: string
  title: string
  body: string
  views: number
  likes: number
  likeId: number | null
  createdAt: Date
  lastModifiedAt: string | null
}

export interface IArticleResponse {
  page: number
  limit: number
  totalCount: number
  totalPages: number
  data: IArticleViewModel[]
}
