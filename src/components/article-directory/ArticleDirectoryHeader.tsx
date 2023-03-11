import Input from '@inet/components/shared/Input'
import { SearchIcon } from '@inet/icons'
import { useGetArticleCategoryQuery } from '@inet/services/apiSlice'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import Button from '../shared/Button'

export interface IArticleDirectoryHeaderProps {
  category: IArticleCategoryViewModel
  defaultKeyword?: string
  onSearch: (keyword: string) => void
}

export default function ArticleDirectoryHeader({
  category,
  defaultKeyword,
  onSearch,
}: IArticleDirectoryHeaderProps) {
  const { data: categoryDetail } = useGetArticleCategoryQuery(category.code)

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4 gap-6">
        <img
          width={80}
          height={80}
          src={category?.imageUrl}
          alt={category?.code}
          className="rounded-full"
        />
        <div className="text-left">
          <div className="text-10.5">{category?.code.toUpperCase()}</div>
          <div>Articles Today: {categoryDetail?.newArticleCountToday ?? 0}</div>
        </div>
      </div>
      <Input
        type="text"
        className="w-72"
        placeholder="Search in this category"
        defaultValue={defaultKeyword}
        suffix={
          <Button
            variant="custom"
            icon={<SearchIcon className="fill-primary-200" />}
            size="small"
            fillType="ghost"
          />
        }
        onSubmit={onSearch}
        onSuffixClick={onSearch}
      />
    </div>
  )
}
