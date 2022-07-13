import React from 'react'
import ArticleCategorySection from './ArticleCategorySection'
import ArticleSectionContainer from './ArticleSectionContainer'

type Props = {}

export default function HomeContent({}: Props) {
  return (
    <div className="flex desktop:my-8 desktop:mx-36">
      <ArticleCategorySection />
      <ArticleSectionContainer />
    </div>
  )
}
