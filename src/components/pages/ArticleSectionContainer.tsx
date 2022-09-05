import React, { useEffect, useState } from 'react'
import { useGetArticlesQuery } from '../../services/articles'

import Articles from './ArticleSection'

type Props = {}

export default function ArticleSectionContainer({}: Props) {
  const { data, error, isLoading } = useGetArticlesQuery({
    pagination: 'basic',
    page: 0,
    limit: 10,
    FLAG_UNLIMITED: false,
  })
  console.log('useGetArticlesQuery', data)

  return <Articles />
}
