import { SearchIcon } from '@inet/icons'
import { IArticleResponse } from '@inet/services/types/articles/i-article.view-model'
import clsx from 'clsx'
import { useState } from 'react'
import Input from '../shared/Input'
import SpinLoader from '../shared/SpinLoader'

type Props = {
  category: string
  imageUrl: string
  response: IArticleResponse | undefined
  isFetching: boolean
}

const ArticleSectionTitleCategories = ({
  category,
  imageUrl,
  response,
  isFetching,
}: Props) => {
  const [isImgLoading, setIsImgLoading] = useState(true)

  return isFetching ? (
    <SpinLoader />
  ) : (
    <>
      <div className="flex flex-row mb-4 gap-6">
        <SpinLoader className={clsx('h-20 w-20', !isImgLoading && 'hidden')} />
        <img
          width={80}
          height={80}
          src={imageUrl}
          alt={category}
          className={clsx('rounded-full', isImgLoading && 'hidden')}
          onLoad={() => setIsImgLoading(false)}
        />
        <div className="text-left">
          <div className="text-10.5">{category.toUpperCase()}</div>
          <div>Articles Today: {response!.totalCount}</div>
        </div>
      </div>
      <div>
        <Input
          type="text"
          className="w-64"
          placeholder="Search in this category"
          suffix={<SearchIcon className="fill-primary-200" />}
        />
      </div>
    </>
  )
}

export default ArticleSectionTitleCategories
