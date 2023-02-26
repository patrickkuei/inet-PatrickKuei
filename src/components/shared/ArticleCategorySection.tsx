import AriticleCagegory from './AriticleCagegory'

import articleCategories from '@inet/mockData/articleCategories'

type Props = {}

export default function ArticleCategorySection({}: Props) {
  return (
    <div className="hidden w-52 p-4 bg-white rounded-lg text-left desktop:block shrink-0 self-start">
      <AriticleCagegory categories={articleCategories} />
    </div>
  )
}
