import { SearchIcon } from '@inet/icons'
import Input from '../shared/Input'

type Props = {
  category: string
  imageUrl: string
}

const ArticleSectionTitleCategories = ({ category, imageUrl }: Props) => {
  return (
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
          placeholder="Search in this category."
          suffix={<SearchIcon className="fill-primary-200" />}
        />
      </div>
    </>
  )
}

export default ArticleSectionTitleCategories
