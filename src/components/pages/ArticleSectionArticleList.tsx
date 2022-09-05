import moment from 'moment'
import React, { useEffect, useState } from 'react'

import ArticleThumbnail from './ArticleThumbnail'

import articles, { IArticle } from '../../mockData/articles'

const mockArticles = articles

const ArticleSectionArticleList = () => {
  const getArticles = () => mockArticles

  const currentArticleList: IArticle[] = getArticles()
  const [currentMoment, setCurrentMoment] = useState(moment())

  const currentMomentInterval = setInterval(() => {
    setCurrentMoment(moment())
  }, 60000)

  useEffect(() => {
    return clearInterval(currentMomentInterval)
  })

  return currentArticleList.length < 1 ? (
    <span className="text-tiny text-gray-500">no article</span>
  ) : (
    <>
      {currentArticleList.map((article) => {
        const createdAtDuration = moment
          .duration(-currentMoment.diff(moment(article.createdAt)))
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
