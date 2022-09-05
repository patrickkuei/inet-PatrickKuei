import React, { useState } from 'react'
import Button from '../shared/Button'

enum ArticleTimeFilter {
  Today = 'today',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Yearly = 'yearly',
  None = 'none',
}

const filters = Object.values(ArticleTimeFilter)

const ArticlaSectionFilter = () => {
  const [currentFilter, setCurrentFilter] = useState(ArticleTimeFilter.Today)

  return (
    <>
      {filters.map((filter) => (
        <Button
          key={filter}
          title={filter}
          isSizeCustom={true}
          fillType={filter === currentFilter ? 'filled' : 'outline'}
          className="h-9 px-3 capitalize text-tiny"
          onClick={() => setCurrentFilter(filter)}
        />
      ))}
    </>
  )
}

export default ArticlaSectionFilter
