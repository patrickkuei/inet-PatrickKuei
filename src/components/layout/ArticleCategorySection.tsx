import AriticleCagegory from '../home/AriticleCategory'

type Props = {}

export default function ArticleCategorySection({}: Props) {
  return (
    <div className="sticky top-5 hidden w-52 p-4 bg-white rounded-lg text-left desktop:block shrink-0 self-start">
      <AriticleCagegory />
    </div>
  )
}
