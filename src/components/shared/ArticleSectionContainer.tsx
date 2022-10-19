import React, { useEffect, useState } from 'react'
import { useGetArticlesQuery } from '../../services/articles'
import { ArticleCreatedWithin } from '../../services/types/articles/i-get-articles.query'
import { Pagination } from '../../services/types/shared/pagination'

import ArticleSection from './ArticleSection'

type Props = {}

export default function ArticleSectionContainer({}: Props) {
  const { data, error, isLoading } = useGetArticlesQuery({
    pagination: Pagination.Basic,
    page: 0,
    limit: 10,
  })
  console.log('useGetArticlesQuery', data)

  return <ArticleSection />
}
