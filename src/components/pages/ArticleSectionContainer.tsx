import React, { useState } from 'react'
import Button from '../shared/Button'
import Articles from './ArticleSection'
import ArticleThumbnail from './ArticleThumbnail'

import articles, { IArticle } from '../../mockData/articles'

type Props = {}

enum ArticleTimeFilter {
  Today = 'today',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Yearly = 'yearly',
  None = 'none',
}

const filters = Object.entries(ArticleTimeFilter).map(([, value]) => value)

const mockArticles = articles

export default function ArticleSectionContainer({}: Props) {
  const [currentFilter, setCurrentFilter] = useState(ArticleTimeFilter.Today)

  const filter = () => {
    const handerFilterClick = (filter: string) => {
      setCurrentFilter(filter as ArticleTimeFilter)
    }

    return (
      <>
        {filters.map((filter) => (
          <Button
            key={filter}
            title={filter}
            isSizeCustom={true}
            fillType={filter === currentFilter ? 'filled' : 'outline'}
            className="h-9 px-3 capitalize text-tiny"
            onClick={() => handerFilterClick(filter)}
          />
        ))}
      </>
    )
  }

  const getArticled = () => mockArticles

  const articleList = () => {
    const currentArticleList: IArticle[] = getArticled()
    // const currentArticleList: any[] = []

    return currentArticleList.length < 1 ? (
      <span className="text-tiny text-gray-500">no article</span>
    ) : (
      currentArticleList.map((article) => (
        <ArticleThumbnail key={article.id} article={article} />
      ))
    )
  }

  return <Articles filter={filter()} articleList={articleList()} />
}
