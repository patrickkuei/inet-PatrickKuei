import React, { useState } from 'react'
import Button from '../shared/Button'
import Articles from './ArticleSection'

type Props = {}

enum ArticleTimeFilter {
  Today = 'today',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Yearly = 'yearly',
  None = 'none',
}

const filters = Object.entries(ArticleTimeFilter).map(([, value]) => value)

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

  const articleList = () => {
    const currentArticleList = []

    return (
      <div>
        {currentArticleList.length < 1 ? (
          <span className="text-tiny text-gray-500">no article</span>
        ) : (
          ''
        )}
      </div>
    )
  }

  return <Articles filter={filter()} articleList={articleList()} />
}
