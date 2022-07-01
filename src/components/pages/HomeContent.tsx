import React from 'react'
import ArticleCategorySection from './ArticleCategorySection'
import ArticleSectionContainer from './ArticleSectionContainer'

type Props = {}

export default function HomeContent({}: Props) {
  return (
    <div className="my-8 mx-36 flex">
      <ArticleCategorySection />
      <ArticleSectionContainer />
    </div>
  )
}
