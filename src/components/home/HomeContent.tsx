import React from 'react'
import ArticleCategorySection from '../shared/ArticleCategorySection'
import ArticleSectionContainer from '../shared/ArticleSectionContainer'
type Props = {}

export default function HomeContent({}: Props) {
  return (
    <div className="flex desktop:my-8 desktop:mx-16 desktop-lg:mx-36">
      <ArticleCategorySection />
      <ArticleSectionContainer />
    </div>
  )
}
