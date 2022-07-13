import React from 'react'
import AriticleCagegory from '../shared/AriticleCagegory'

import articleCategories from '../../mockData/articleCategories'

type Props = {}

export default function ArticleCategorySection({}: Props) {
  return (
    <div className="hidden w-52 p-4 bg-white rounded-lg text-left desktop:block">
      <AriticleCagegory categories={articleCategories} />
    </div>
  )
}
