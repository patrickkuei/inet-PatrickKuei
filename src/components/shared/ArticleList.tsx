import { IArticleViewModel } from '@inet/services/types/articles/i-article.view-model'
import moment from 'moment'
import { useRef } from 'react'
import ArticlePreview from './ArticlePreview'
import ArticleSectionArticleListNoArticle from './ArticleSectionArticleListNoArticle'
import Spinner from './Spinner'

interface IArticleListProps {
  isLoading: boolean
  articles: IArticleViewModel[]
}

export default function ArticleList({
  isLoading,
  articles,
}: IArticleListProps) {
  const currentMoment = useRef(moment())

  return isLoading ? (
    <Spinner className="mt-12" size="md" />
  ) : !articles.length ? (
    <ArticleSectionArticleListNoArticle />
  ) : (
    <div className="flex flex-col gap-y-5">
      {articles.map((article) => {
        const createdAt = moment
          .duration(-currentMoment.current.diff(moment(article.createdAt)))
          .humanize(true)

        return (
          <ArticlePreview
            key={article.id}
            article={article}
            createdAt={createdAt}
          />
        )
      })}
    </div>
  )
}
