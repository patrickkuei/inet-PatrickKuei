import AriticleCategoryNavs from './AriticleCategoryNavs'

type Props = {}

export default function ArticleCategoryNavsContainer({}: Props) {
  return (
    <div className="sticky top-5 hidden w-52 p-4 bg-white rounded-lg text-left desktop:block shrink-0 self-start">
      <AriticleCategoryNavs />
    </div>
  )
}
