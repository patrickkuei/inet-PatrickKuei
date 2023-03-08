import { SearchIcon } from '@inet/icons'
import Input from '../shared/Input'
import ArticleSectionFiler from './ArticleSectionFilter'

type Props = {
  category: string
  imageUrl: string
}

const ArticleSectionTitle = ({ category, imageUrl }: Props) => {
  return category === 'popular' ? (
    <>
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <div className="flex mt-4 mb-5 gap-4 flex-wrap">
        <ArticleSectionFiler />
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-row mb-4 gap-6">
        <img
          width={80}
          height={80}
          src={imageUrl}
          alt={category}
          className="rounded-full"
        />
        <div className="text-left">
          <div className="text-10.5">{category.toUpperCase()}</div>
          <div>Articles Today: 0</div>
        </div>
      </div>
      <div>
        <Input
          type="text"
          className="w-64"
          placeholder="在此分類中搜尋"
          icon={<SearchIcon className="fill-primary-200" />}
        />
      </div>
    </>
  )
}

export default ArticleSectionTitle
