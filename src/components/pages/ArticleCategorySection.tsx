import React from 'react'
import AriticleCagegory from '../shared/AriticleCagegory'

import articleCategories from '../../mockData/articleCategories'

type Props = {}

export default function ArticleCategorySection({}: Props) {
  return (
    <div className="w-52 p-4 bg-white rounded-lg text-left">
      <AriticleCagegory categories={articleCategories} />
    </div>
  )
}
