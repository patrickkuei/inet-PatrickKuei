import Input from '@inet/components/shared/Input'
import { SearchIcon } from '@inet/icons'
import {
  useGetArticleCategoriesQuery,
  useGetArticleCategoryQuery,
} from '@inet/services/apiSlice'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import { useMemo } from 'react'

interface IArticleDirectoryHeaderProps {
  category: IArticleCategoryViewModel
}

export default function ArticleDirectoryHeader({
  category,
}: IArticleDirectoryHeaderProps) {
  const { data: categoryDetail } = useGetArticleCategoryQuery(category.code)

  return (
    <>
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
      <div>
        <Input
          type="text"
          className="w-64"
          placeholder="在此分類中搜尋"
          suffix={<SearchIcon className="fill-primary-200" />}
        />
      </div>
    </>
  )
}
