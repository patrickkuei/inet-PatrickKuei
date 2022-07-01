import React from 'react'
import ArticleCategories from './ArticleCategories'
import ArticleSection from './ArticleSection'

type Props = {}

export default function HomeContent({}: Props) {
  return (
    <div className="my-8 mx-36 flex">
      <ArticleCategories />
      <ArticleSection />
    </div>
  )
}
