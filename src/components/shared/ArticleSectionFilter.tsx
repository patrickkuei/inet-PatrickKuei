import React, { useState } from 'react'
import { ArticleCreatedWithin } from '../../services/types/articles/i-get-articles.query'
import Button from '../shared/Button'

const filters = Object.values(ArticleCreatedWithin)

const ArticlaSectionFilter = () => {
  const [currentFilter, setCurrentFilter] = useState(ArticleCreatedWithin.Today)

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
