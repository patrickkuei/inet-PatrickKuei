import moment from 'moment'
import React, { useRef } from 'react'
import { IArticleViewModel } from '../../services/types/articles/i-article.view-model'
import ArticleThumbnail from './ArticleThumbnail'
import PaginationSection from './PaginationSection'

type Props = {
  articles: IArticleViewModel[]
}

const ArticleSectionArticleList = ({ articles }: Props) => {
  const currentMoment = useRef(moment())

  return articles.length < 1 ? (
    <span className="text-tiny text-gray-500">no article</span>
  ) : (
    <>
      {articles.map((article) => {
        const createdAtDuration = moment
          .duration(-currentMoment.current.diff(moment(article.createdAt)))
          .humanize(true)

        return (
          <ArticleThumbnail
            key={article.id}
            article={article}
            createdAtDuration={createdAtDuration}
          />
        )
      })}
      <PaginationSection />
    </>
  )
}

export default ArticleSectionArticleList
