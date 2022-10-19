import moment from 'moment'
import React, { useRef } from 'react'

import ArticleThumbnail from './ArticleThumbnail'

import mockArticles from '../../mockData/articles'
import { IArticleViewModel } from '../../services/types/articles/i-article.view-model'

const ArticleSectionArticleList = () => {
  const getArticles = () => mockArticles

  const currentArticleList: IArticleViewModel[] = getArticles()
  const currentMoment = useRef(moment())

  return currentArticleList.length < 1 ? (
    <span className="text-tiny text-gray-500">no article</span>
  ) : (
    <>
      {currentArticleList.map((article) => {
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
    </>
  )
}

export default ArticleSectionArticleList
